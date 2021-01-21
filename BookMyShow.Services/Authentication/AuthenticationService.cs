using BookMyShow.Models.Authentication;
using BookMyShow.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Authentication
{
    public class AuthenticationService
    {
        public AuthenticationService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager,
                              IConfiguration configuration)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this.SecurityKey = configuration["JWTBearerKey"].ToString();
        }

        private string SecurityKey { get; }
        private UserManager<IdentityUser> _userManager { get; }
        private SignInManager<IdentityUser> _signInManager { get; }

        public async Task<TokenViewModel> LoginAsync(LoginViewModel model)
        {
            var User = await _userManager.FindByEmailAsync(model.Email);

            TokenViewModel Token = new TokenViewModel { 
                UserName = model.Email
            };

            if (User != null && await _userManager.CheckPasswordAsync(User,model.Password))
            {
                //var signInResult = await _signInManager.PasswordSignInAsync(User, model.password, false, false);
                var role = await _userManager.GetRolesAsync(User);
                IdentityOptions _options = new IdentityOptions();

                    var TokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[] { 
                            new Claim("UserId",User.Id.ToString()),
                            new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                        }),
                        Expires = DateTime.Now.AddHours(1),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.SecurityKey)),
                        SecurityAlgorithms.HmacSha256)
                    };

                    var TokenHandler = new JwtSecurityTokenHandler();
                    var SecurityToken = TokenHandler.CreateToken(TokenDescriptor);
                    Token.AccessToken = TokenHandler.WriteToken(SecurityToken);
                Token.UserId = await _userManager.GetUserIdAsync(User);
            }

            return Token;
        }


        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }


        public async Task<bool> RegisterAsync(RegisterViewModel model)
        {
            var User = new IdentityUser { UserName = model.Email, Email = model.Email };
            model.Role = "User";

            var Result = await _userManager.CreateAsync(User, model.Password);
            await _userManager.AddToRoleAsync(User, model.Role);

            if (Result.Succeeded)
            {
                var result = await _signInManager.PasswordSignInAsync(User, model.Password, false, false);
                if (result.Succeeded)
                {
                    return true;
                }
            }

            return false;
        }

        public List<IdentityUser> GetUSers()
        {
            return this._userManager.Users.ToList();
        }

        public async Task DeleteUserAsync(string userName)
        {
            var User = await this._userManager.FindByNameAsync(userName);
            if(User!=null)
            {
                await this._userManager.DeleteAsync(User);
            }
        }

        public async Task ChangePassAsync(PassChangeModel model)
        {
            var User = await this._userManager.FindByNameAsync(model.UserName);
            if (User != null)
            {
                await this._userManager.ChangePasswordAsync(User, model.CurrentPass, model.NewPass);
            }
        }
    }
}

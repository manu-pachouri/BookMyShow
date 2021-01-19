using backend.Models;
using backend.Models.Authentication;
using backend.Models.ViewModels;
using backend.Services.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("authentication")]
    [ApiController]
    public class Authenticationcontroller : ControllerBase
    {
        public Authenticationcontroller(AuthenticationService authService)
        {
            this._authService = authService;
        }
        private AuthenticationService _authService { get; }

        
        [Route("login")]
        public async Task<TokenViewModel> PostLoginDetails([FromBody] LoginViewModel model)
        {
            TokenViewModel Token = await this._authService.LoginAsync(model);
            return Token;
        }

        
        [Route("register")]
        public async Task<bool> PostRegistrationDetails([FromBody] RegisterViewModel model)
        {
            var result = await this._authService.RegisterAsync(model);
            return result;
        }

        
        [Route("logout")]
        public async Task PostLogoutDetails()
        {
            await this._authService.LogoutAsync();
        }

        
        [Authorize(Roles = "Admin")]
        [Route("adminpanel/users")]
        public List<IdentityUser> GetUsers()
        {
            return this._authService.GetUSers();
        }

        
        [Authorize(Roles = "Admin")]
        [Route("adminpanel/users/delete/{userName}")]
        public async Task DeleteUser(string userName)
        {
            await this._authService.DeleteUserAsync(userName);
        }

        
        [Authorize(Roles = "Admin")]
        [Route("adminpanel/users/changepass")]
        public async Task PostChangeUserPasswordDetails([FromBody] PassChangeModel model)
        {
            await this._authService.ChangePassAsync(model);
        }
    }
}

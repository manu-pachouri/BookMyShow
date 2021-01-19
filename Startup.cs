using AutoMapper;
using backend.Models;
using backend.Services.AppService;
using backend.Services.Authentication;
using BMSIntegrated.AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using SimpleInjector;
using System;
using System.Text;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            Container.Options.ResolveUnregisteredConcreteTypes = false;
        }

        private readonly Container Container = new Container();
        public IConfiguration Configuration { get; }

        public static void Register(Container container)
        {
            container.Register<AuthenticationService>(Lifestyle.Scoped);
            container.Register<MapperProvider>();
            container.Register<IAppService, AppService>(Lifestyle.Singleton);
            container.Register<DbContext, BMSContext>(Lifestyle.Scoped);

            container.RegisterSingleton(() => GetMapper(container));
        }

        private static AutoMapper.IMapper GetMapper(Container container)
        {
            var mp = container.GetInstance<MapperProvider>();
            return mp.GetMapper();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
            }));

            services.AddIdentity<IdentityUser, IdentityRole>(options =>
             {
                 options.Password.RequireNonAlphanumeric = false;
                 options.Password.RequireDigit = false;
                 options.Password.RequireUppercase = false;
                 options.Password.RequiredLength = 4;
                 options.Password.RequireLowercase = false;

             })
                .AddRoles<IdentityRole>()
                .AddDefaultTokenProviders()
                .AddEntityFrameworkStores<BMSContext>();

            var Key = Encoding.UTF8.GetBytes(Configuration["JWTBearerKey"].ToString());

            services.AddAuthentication(config => {
                config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                config.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(builder=>
            {
                builder.RequireHttpsMetadata = false;
                builder.SaveToken = false;
                builder.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            services.AddControllers();

            services.AddDbContext<BMSContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("BookMyShowDb1"));
            });

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddSimpleInjector(Container, options =>
            {
                options.AddAspNetCore().
                AddControllerActivation();

                options.AutoCrossWireFrameworkComponents = true;
            });

            Register(Container);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSimpleInjector(Container);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseCors("MyPolicy");

            app.UseAuthentication();

            app.UseRouting();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            Container.Verify();
        }
    }
}

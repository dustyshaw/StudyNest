using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using studynest_api.Data;
using studynest_api.Services;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// builder.Services.AddCors();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddDbContextFactory<DbDustyshaw25Context>(config => config.UseNpgsql(builder.Configuration.GetConnectionString("studynestdb"), builder =>
{
    builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
}));

builder.Services.AddAuthentication("Bearer").AddJwtBearer("Bearer", options =>
    {
        options.Authority = "https://auth.snowse.duckdns.org/realms/advanced-frontend";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = "https://auth.snowse.duckdns.org/realms/advanced-frontend", //Found at https://auth.snowse.duckdns.org/realms/advanced-frontend/.well-known/openid-configuration
            ValidAudience = "studynest-authclient", // Client in Keycloak
        };
    });

builder.Services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});


builder.Services.AddSingleton<ICourseService, CourseService>();
builder.Services.AddSingleton<IUserCourseService, UserCourseService>();
builder.Services.AddSingleton<IUserService, UserService>();
builder.Services.AddSingleton<IUnitService, UnitService>();
builder.Services.AddSingleton<ICourseUnitService, CourseUnitService>();
builder.Services.AddSingleton<ITaskService, TaskService>();
builder.Services.AddSingleton<IStatsService, StatsService>();


var app = builder.Build();

// app.UseCors(p => p.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

app.UseCors("AllowAll");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
RUN dotnet build
COPY "studynest-api.csproj" .
RUN dotnet restore
COPY . .
RUN dotnet publish /src/studynest-api.csproj -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=build /app .
ENTRYPOINT ["dotnet", "studynest-api.dll"]
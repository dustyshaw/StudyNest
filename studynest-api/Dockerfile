FROM mcr.microsoft.com/dotnet/sdk:latest AS build-env

WORKDIR /App

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
COPY . .
RUN dotnet publish -c Release -o out



# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:latest
WORKDIR /App
# COPY ./imageuploads ./imageuploads
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "studynest-api.dll"]
FROM mcr.microsoft.com/dotnet/sdk:latest AS build-env

WORKDIR /App

COPY . ./

RUN dotnet restore

COPY . .

# Run linting in pipeline
RUN dotnet format
RUN dotnet publish -c Release -o out


# TODO ADD ENVIRONMENT VARIABLES
# ENV MY_VARIABLE=123


FROM mcr.microsoft.com/dotnet/aspnet:latest
WORKDIR /App
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "studynest-api.dll"]
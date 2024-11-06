FROM mcr.microsoft.com/dotnet/sdk:latest AS build-env

WORKDIR /App

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
COPY . .
RUN dotnet publish -c Release -o out
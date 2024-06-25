#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["TemplateNet6.WebApp/TemplateNet6.WebApp.csproj", "TemplateNet6.WebApp/"]
RUN dotnet restore "./TemplateNet6.WebApp/TemplateNet6.WebApp.csproj"
COPY . .
WORKDIR "/src/TemplateNet6.WebApp"
RUN dotnet build "./TemplateNet6.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./TemplateNet6.WebApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

ENV ASPNETCORE_URLS="http://+:80"
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TemplateNet6.WebApp.dll"]
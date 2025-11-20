# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copier le fichier projet et restaurer les dépendances
COPY ["FootballAPI.csproj", "./"]
RUN dotnet restore "FootballAPI.csproj"

# Copier tout le code source et builder
COPY . .
RUN dotnet build "FootballAPI.csproj" -c Release -o /app/build

# Stage 2: Publish
FROM build AS publish
RUN dotnet publish "FootballAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Stage 3: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Copier les fichiers publiés
COPY --from=publish /app/publish .

# Variables d'environnement par défaut
# Railway utilise la variable PORT automatiquement
ENV ASPNETCORE_URLS=http://+:${PORT:-8080}
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "FootballAPI.dll"]

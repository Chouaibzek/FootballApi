# 🐳 Déploiement Docker - Football Matches Viewer

## 📋 Prérequis
- Docker Desktop installé
- Docker Compose installé

## 🚀 Démarrage rapide

### 1. Build et démarrage des conteneurs
```bash
docker-compose up --build
```

### 2. Accéder à l'application
- **Frontend** : http://localhost
- **Backend API** : http://localhost:8080
- **Swagger** : http://localhost:8080/swagger (si activé)

### 3. Arrêter les conteneurs
```bash
docker-compose down
```

## 🔧 Configuration

### Variables d'environnement

#### Backend (`FootballAPI`)
- `ASPNETCORE_ENVIRONMENT` : Environment (Production/Development)
- `ASPNETCORE_URLS` : URL d'écoute (défaut: http://+:8080)
- `AllowedOrigins` : Origines CORS autorisées (séparées par virgules)

#### Frontend (`foot-react`)
- `VITE_API_URL` : URL de l'API backend (défini au build)

## 📦 Build individuel

### Backend uniquement
```bash
cd FootballAPI
docker build -t football-api .
docker run -p 8080:8080 football-api
```

### Frontend uniquement
```bash
cd foot-react
docker build --build-arg VITE_API_URL=http://localhost:8080/api -t football-frontend .
docker run -p 80:80 football-frontend
```

## ☁️ Déploiement sur Azure

### Option 1 : Azure Container Instances (ACI)

1. **Créer un Azure Container Registry**
```bash
az acr create --resource-group myResourceGroup --name footballregistry --sku Basic
```

2. **Login au registry**
```bash
az acr login --name footballregistry
```

3. **Tag et push des images**
```bash
# Backend
docker tag football-api footballregistry.azurecr.io/football-api:latest
docker push footballregistry.azurecr.io/football-api:latest

# Frontend
docker tag football-frontend footballregistry.azurecr.io/football-frontend:latest
docker push footballregistry.azurecr.io/football-frontend:latest
```

4. **Déployer sur ACI**
```bash
# Backend
az container create \
  --resource-group myResourceGroup \
  --name football-api \
  --image footballregistry.azurecr.io/football-api:latest \
  --dns-name-label football-api-unique \
  --ports 8080

# Frontend
az container create \
  --resource-group myResourceGroup \
  --name football-frontend \
  --image footballregistry.azurecr.io/football-frontend:latest \
  --dns-name-label football-frontend-unique \
  --ports 80 \
  --environment-variables VITE_API_URL=http://football-api-unique.region.azurecontainer.io:8080/api
```

### Option 2 : Azure App Service (Web Apps)

1. **Créer un App Service Plan**
```bash
az appservice plan create --name footballPlan --resource-group myResourceGroup --is-linux --sku B1
```

2. **Créer les Web Apps**
```bash
# Backend
az webapp create \
  --resource-group myResourceGroup \
  --plan footballPlan \
  --name football-api-app \
  --deployment-container-image-name footballregistry.azurecr.io/football-api:latest

# Frontend
az webapp create \
  --resource-group myResourceGroup \
  --plan footballPlan \
  --name football-frontend-app \
  --deployment-container-image-name footballregistry.azurecr.io/football-frontend:latest
```

3. **Configurer les variables d'environnement**
```bash
# Backend
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name football-api-app \
  --settings AllowedOrigins=https://football-frontend-app.azurewebsites.net

# Frontend
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name football-frontend-app \
  --settings VITE_API_URL=https://football-api-app.azurewebsites.net/api
```

## 🔍 Debugging

### Voir les logs
```bash
# Tous les conteneurs
docker-compose logs -f

# Backend uniquement
docker-compose logs -f backend

# Frontend uniquement
docker-compose logs -f frontend
```

### Accéder au conteneur
```bash
# Backend
docker exec -it football-api /bin/bash

# Frontend
docker exec -it football-frontend /bin/sh
```

## 📝 Notes importantes

1. **CORS** : Assurez-vous que `AllowedOrigins` dans le backend inclut l'URL du frontend
2. **API URL** : Le frontend doit pointer vers l'URL publique du backend en production
3. **HTTPS** : En production Azure, utilisez HTTPS (géré automatiquement par Azure)
4. **Secrets** : Ne commitez jamais les API keys dans le code (utilisez Azure Key Vault)

## 🛠️ Troubleshooting

### Le frontend ne peut pas contacter le backend
- Vérifiez que `VITE_API_URL` pointe vers la bonne URL
- Vérifiez les règles CORS dans le backend
- Vérifiez que les ports sont bien exposés

### Erreur de build
- Assurez-vous que tous les fichiers nécessaires sont présents
- Vérifiez les `.dockerignore` pour ne pas exclure des fichiers importants
- Nettoyez le cache Docker : `docker system prune -a`

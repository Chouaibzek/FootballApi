# 🚂 Déploiement Railway - Football Matches Viewer

## 🎯 Pourquoi Railway ?

- ✅ **Plus simple** qu'Azure
- ✅ **Moins cher** (5$/mois gratuit, puis ~5-10$/mois)
- ✅ **Déploiement automatique** depuis GitHub
- ✅ **URLs HTTPS automatiques**
- ✅ **Variables d'environnement faciles**

---

## 📋 Prérequis

1. Compte GitHub (gratuit)
2. Compte Railway (gratuit) : https://railway.app
3. Git installé localement

---

## 🚀 Étapes de déploiement

### 1️⃣ Préparer le repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
cd c:\Users\choua\FootBallProjet
git init

# Ajouter un .gitignore
echo "node_modules/
dist/
.env
.env.local
bin/
obj/
*.user
.vs/
.vscode/" > .gitignore

# Commit initial
git add .
git commit -m "Initial commit - Football Matches Viewer"

# Créer un repo sur GitHub et le lier
git remote add origin https://github.com/TON_USERNAME/football-project.git
git branch -M main
git push -u origin main
```

### 2️⃣ Déployer le Backend sur Railway

1. **Aller sur https://railway.app**
2. **Se connecter avec GitHub**
3. **Cliquer sur "New Project"**
4. **Sélectionner "Deploy from GitHub repo"**
5. **Choisir ton repository `football-project`**
6. **Railway détecte automatiquement le Dockerfile**

#### Configuration Backend :

**Root Directory** : `FootballAPI`

**Variables d'environnement** :
```
ASPNETCORE_ENVIRONMENT=Production
AllowedOrigins=https://TON-FRONTEND.up.railway.app
```

7. **Cliquer sur "Deploy"**
8. **Attendre le déploiement (~2-3 minutes)**
9. **Noter l'URL générée** : `https://football-api-production-xxxx.up.railway.app`

### 3️⃣ Déployer le Frontend sur Railway

1. **Dans Railway, cliquer sur "New Service"**
2. **Sélectionner le même repository GitHub**
3. **Railway détecte automatiquement le Dockerfile**

#### Configuration Frontend :

**Root Directory** : `foot-react`

**Build Arguments** :
```
VITE_API_URL=https://football-api-production-xxxx.up.railway.app/api
```

**Variables d'environnement** :
```
VITE_API_URL=https://football-api-production-xxxx.up.railway.app/api
```

4. **Cliquer sur "Deploy"**
5. **Attendre le déploiement (~3-4 minutes)**
6. **Noter l'URL générée** : `https://football-frontend-production-yyyy.up.railway.app`

### 4️⃣ Mettre à jour le CORS du Backend

1. **Retourner sur le service Backend dans Railway**
2. **Aller dans "Variables"**
3. **Modifier `AllowedOrigins`** :
```
AllowedOrigins=https://football-frontend-production-yyyy.up.railway.app
```
4. **Sauvegarder** (Railway redéploie automatiquement)

---

## 🎨 Configuration Railway via Interface Web

### Backend Service

| Setting | Value |
|---------|-------|
| **Name** | football-api |
| **Root Directory** | `FootballAPI` |
| **Build Command** | (auto-détecté via Dockerfile) |
| **Start Command** | (auto-détecté via Dockerfile) |

**Environment Variables** :
```env
ASPNETCORE_ENVIRONMENT=Production
AllowedOrigins=https://football-frontend-production.up.railway.app
```

### Frontend Service

| Setting | Value |
|---------|-------|
| **Name** | football-frontend |
| **Root Directory** | `foot-react` |
| **Build Command** | (auto-détecté via Dockerfile) |
| **Start Command** | (auto-détecté via Dockerfile) |

**Environment Variables** :
```env
VITE_API_URL=https://football-api-production.up.railway.app/api
```

---

## 🔄 Déploiement automatique

Railway redéploie automatiquement à chaque push sur GitHub :

```bash
# Faire des modifications
git add .
git commit -m "Update feature"
git push

# Railway détecte le push et redéploie automatiquement ! 🚀
```

---

## 🌐 URLs Finales

Après déploiement, tu auras :

### Frontend (Public)
```
https://football-frontend-production-xxxx.up.railway.app
```
**→ Partage cette URL à tout le monde !**

### Backend (API)
```
https://football-api-production-xxxx.up.railway.app
```
**→ Utilisé uniquement par le frontend**

---

## 💰 Coûts Railway

### Plan Gratuit (Hobby)
- **5$ de crédit gratuit/mois**
- Suffisant pour ce projet en développement

### Plan Payant (si nécessaire)
- **~5-10$/mois** selon l'utilisation
- Paiement à l'usage (pay-as-you-go)

---

## 🔍 Monitoring

### Voir les logs en temps réel

1. **Dans Railway, cliquer sur ton service**
2. **Onglet "Deployments"**
3. **Cliquer sur le déploiement actif**
4. **Voir les logs en temps réel**

### Métriques
- CPU usage
- Memory usage
- Network traffic
- Request count

---

## 🛠️ Troubleshooting

### Le backend ne démarre pas
```bash
# Vérifier les logs dans Railway
# Vérifier que le Dockerfile est correct
# Vérifier les variables d'environnement
```

### Le frontend ne peut pas contacter le backend
```bash
# Vérifier VITE_API_URL dans les variables d'environnement
# Vérifier AllowedOrigins dans le backend
# Vérifier que les deux services sont déployés
```

### Erreur CORS
```bash
# Le backend doit autoriser l'URL exacte du frontend
# Format : https://football-frontend-production-xxxx.up.railway.app
# Pas de slash à la fin !
```

---

## 🎯 Checklist de déploiement

- [ ] Créer un compte Railway
- [ ] Pusher le code sur GitHub
- [ ] Déployer le backend sur Railway
- [ ] Noter l'URL du backend
- [ ] Déployer le frontend avec l'URL du backend
- [ ] Noter l'URL du frontend
- [ ] Mettre à jour le CORS du backend avec l'URL du frontend
- [ ] Tester l'application en production
- [ ] Partager l'URL du frontend ! 🎉

---

## 🔗 Liens utiles

- **Railway Dashboard** : https://railway.app/dashboard
- **Railway Docs** : https://docs.railway.app
- **Railway Discord** : https://discord.gg/railway

---

## 📝 Notes importantes

1. **Railway génère des URLs aléatoires** - Note-les bien !
2. **Les URLs changent si tu supprimes et recrées un service**
3. **Le déploiement prend 2-5 minutes** par service
4. **Railway redéploie automatiquement** à chaque push GitHub
5. **Les logs sont disponibles en temps réel** dans l'interface

---

## 🚀 Alternative : Déploiement manuel (sans GitHub)

Si tu ne veux pas utiliser GitHub :

### Backend
```bash
# Installer Railway CLI
npm install -g @railway/cli

# Login
railway login

# Créer un nouveau projet
railway init

# Déployer
cd FootballAPI
railway up
```

### Frontend
```bash
# Dans un nouveau terminal
railway init

# Déployer
cd foot-react
railway up
```

---

## ✅ Avantages Railway vs Azure

| Feature | Railway | Azure |
|---------|---------|-------|
| **Prix** | 5$/mois | ~18€/mois |
| **Setup** | 5 minutes | 30+ minutes |
| **Interface** | Simple | Complexe |
| **Auto-deploy** | ✅ Oui | ❌ Non (CI/CD requis) |
| **HTTPS** | ✅ Automatique | ⚠️ Configuration requise |
| **Logs** | ✅ Temps réel | ⚠️ Configuration requise |

**Railway est parfait pour ce projet ! 🎯**

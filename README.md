# 🌤️ Dashboard Météo

Application météo responsive développée avec React, dockerisée et déployée via pipeline CI/CD GitLab.

## 📋 Fonctionnalités

- 🔍 Recherche de ville en temps réel
- 📍 Géolocalisation automatique
- 🌡️ Météo actuelle (température, humidité, vent)
- 📅 Prévisions sur 5 jours
- 🌙 Mode sombre / clair

## 🛠️ Stack technique

- **Frontend** : React, JavaScript, HTML, CSS
- **API** : OpenWeatherMap
- **Conteneurisation** : Docker, Nginx
- **CI/CD** : GitLab CI/CD

## 🚀 Lancer le projet

### En développement
```bash
npm install
npm run dev
```

### Avec Docker
```bash
docker build -t weather-dashboard .
docker run -p 8080:80 weather-dashboard
```

Ouvre `http://localhost:8080`

## 📁 Structure du projet
```
src/
├── components/
│   ├── Search.jsx       # Barre de recherche
│   ├── Weather.jsx      # Météo actuelle
│   ├── Forecast.jsx     # Prévisions 5 jours
│   └── Toggle.jsx       # Mode sombre/clair
├── App.jsx
└── App.css
```

## 👤 Auteur

**Mohamed Amine Rja-fallah** — [GitLab](https://gitlab.com/rja-fallah_amine)
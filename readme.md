# Gest-Client API

Une API REST pour la gestion des clients Orange et des logs, développée avec Node.js, Express et TypeScript.

## 📋 Table des matières

- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [API Endpoints](#api-endpoints)

## 🗂 Structure du projet

```
src/
├── app.ts                 # Configuration de l'application Express
├── server.ts              # Point d'entrée du serveur
├── modules/              # Modules fonctionnels de l'application
│   ├── routes.ts         # Configuration des routes principales
│   ├── clients/         # Module de gestion des clients
│   │   ├── client.controller.ts
│   │   ├── client.service.ts
│   │   ├── client.routes.ts
│   │   └── clientModel.ts
│   └── logs/           # Module de gestion des logs
│       ├── log.controller.ts
│       ├── log.service.ts
│       ├── log.routes.ts
│       └── logModel.ts
└── shared/             # Ressources partagées
    ├── common/         # Middlewares et exceptions communes
    │   ├── errorMiddleware.ts
    │   └── exceptions/
    ├── config/         # Configuration de l'application
    │   ├── database.ts
    │   ├── seed.ts
    │   └── services.yml
    ├── helpers/        # Fonctions utilitaires
    │   ├── constant.ts
    │   ├── records.ts
    │   └── validators.ts
    └── types/          # Types TypeScript partagés
        └── type.ts
```

## 🛠 Technologies utilisées

- Node.js
- Express.js
- TypeScript
- Docker
- Base de données (configurée dans database.ts)

## ⚙️ Prérequis

- Node.js (version 14 ou supérieure)
- Docker et Docker Compose
- npm ou yarn

## 🚀 Installation

1. Cloner le repository
\`\`\`bash
git clone https://github.com/thatsbass/gest-client-orange.git
cd gest-client
\`\`\`

2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

3. Lancer l'application avec Docker
\`\`\`bash
docker-compose up -d
\`\`\`

## ⚡ Configuration

1. Créer un fichier \`.env\` à la racine du projet (basé sur \`.env.example\` si disponible)
2. Configurer les variables d'environnement nécessaires

## 📝 Utilisation

### Développement

\`\`\`bash
npm run dev
\`\`\`

### Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Seed de la base de données

\`\`\`bash
npm run seed:clients
\`\`\`

## 🔗 API Endpoints

### Clients

- \`GET /v1/api/clients/:phone\` - Rechercher un client par numéro de téléphone

### Logs

- \`GET /v1/api/logs\` - Récupérer tous les logs
- \`GET /v1/api/logs/:phone\` - Rechercher les logs par numéro de téléphone

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (\`git checkout -b feature/AmazingFeature\`)
3. Commit vos changements (\`git commit -m 'Add some AmazingFeature'\`)
4. Push vers la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrir une Pull Request

## 📄 Licence

[MIT](LICENSE)

import 'dotenv/config';

const ENV = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase',
    PORT: process.env.PORT || 3000,
}

const MESSAGE = {
    DB_CONNECTED: '✅ MongoDB connecté',
    DB_ERROR: '❌ Erreur connexion MongoDB:',
    SERVER_STARTED: `✅ Serveur démarré sur le port ${ENV.PORT}`,
    SERVER_ERROR: '❌ Erreur serveur:',
    INTERNAL_ERROR: 'Erreur interne du serveur',
    INVALID_PHONE: 'Le numéro de téléphone est invalide',
    CLIENT_FOUND: 'Client trouvé avec succès',
    CLIENT_NOT_FOUND: 'Aucun client trouvé avec ce numéro de téléphone',
    CLIENT_INACTIVE: 'Le client est inactif',
}

export { ENV, MESSAGE };
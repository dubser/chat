const socket = new WebSocket('ws://localhost:8080');

// Établir la connexion
socket.onopen = () => {
    console.log('Connecté au serveur');
    // Envoyer un message au serveur
    socket.send('Bonjour serveur !');
};

// Réception des messages du serveur
socket.onmessage = (event) => {
    console.log(`Message reçu du serveur : ${event.data}`);
};

// Gérer la déconnexion
socket.onclose = () => {
    console.log('Déconnecté du serveur');
};

// Gérer les erreurs
socket.onerror = (error) => {
    console.error('Erreur WebSocket :', error);
};

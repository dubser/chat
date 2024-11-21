const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connecté');

    // Écouter les messages du client
    socket.on('message', (message) => {
        console.log(`Message reçu : ${message}`);
        // Répondre au client
        socket.send(`Serveur : ${message}`);
    });

    // Gérer la déconnexion du client
    socket.on('close', () => {
        console.log('Client déconnecté');
    });
});

console.log('Serveur WebSocket en écoute sur le port 8080');


// server/websocketHandlers/chatHandler.js
const WebSocket = require('ws');

class ChatHandler {
  constructor() {
    this.clients = new Map();
    // Bind methods to the instance
    this.onConnection = this.onConnection.bind(this);
  }

  onConnection(ws) {
    const clientId = Date.now();
    this.clients.set(clientId, ws);
    console.log(`Chat client connected: ${clientId}`);

    ws.on('message', (message) => this.onMessage(clientId, message));
    ws.on('close', () => this.onClose(clientId));
  }

  onMessage(clientId, message) {
    console.log(`Chat message from ${clientId}: ${message}`);
    // Broadcast the message to all other clients
    for (const [id, client] of this.clients.entries()) {
      if (client.readyState === WebSocket.OPEN && id !== clientId) {
        client.send(`User ${clientId}: ${message}`);
      }
    }
  }

  onClose(clientId) {
    console.log(`Chat client disconnected: ${clientId}`);
    this.clients.delete(clientId);
  }
}

module.exports = ChatHandler;

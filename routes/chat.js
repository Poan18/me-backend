const connections = new Set();

const wsHandler = (ws) => {
    connections.add(ws);

    ws.on('message', (message) => {
        connections.forEach((conn) => conn.send(message));
    });

    ws.on('close', () => {
        connections.delete(ws);
    })
}

module.exports = wsHandler;

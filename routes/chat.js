const connections = new Set();

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  "mongodb://localhost:27017/messages";

const wsHandler = (ws) => {
    connections.add(ws);

    ws.on('message', (message) => {
        connections.forEach((conn) => conn.send(message));
        insertMessage(dsn, "crowd", JSON.parse(message))
            .catch(err => console.log(err));;
    });

    ws.on('close', () => {
        connections.delete(ws);
    })
}

/**
 * Insert doc into colName
 *
 * @async
 *
 * @param {string} dsn     DSN to connect to database.
 * @param {string} colName Name of collection.
 * @param {string} doc     Documents to be inserted into collection.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<void>} Void
 */
async function insertMessage(dsn, colName, doc) {
    const client  = await mongo.connect(dsn);
    const db = await client.db();
    const col = await db.collection(colName);
    await col.insertOne(doc);

    await client.close();
}

module.exports = wsHandler;

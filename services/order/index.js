require('dotenv').config({ path: "./.env" });
const Server = require('./server');
const connection = require('./connection');

async function startApp() {
    await Server.connect();
    await connection.Redis.connect();
    await connection.Postgres.connect();
}

startApp().catch((error) => console.error('Error starting app:', error));

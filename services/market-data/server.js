const http = require('http');
const express = require('express');
const routes = require('./routes');


class Server {
    constructor() { }

    static async connect() {
        const app = express();
        app.use('/api/market-data', routes);
        const server = http.createServer(app);
        server.listen(process.env.MARKET_DATA_SERVER_PORT || 8002, () => {
            console.log('Server is running in port: ', process.env.MARKET_DATA_SERVER_PORT||8002);
        });
    }
}

module.exports = Server


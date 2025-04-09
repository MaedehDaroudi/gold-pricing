const http = require('http');
const express = require('express');
const routes = require('./routes');


class Server {
    constructor() { }

    static connect() {
        const app = express();
        app.use('/api/market-data', routes);

        const server = http.createServer(app);
        server.listen(process.env.SERVER_PORT, () => {
            console.log('Server is running');
        });
    }
}

module.exports = Server


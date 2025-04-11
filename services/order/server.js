const http = require('http');
const express = require('express');
const routes = require('./routes');


class Server {
    constructor() { }

    static async connect() {
        const app = express();
        app.use('/api/order', routes);

        const server = http.createServer(app);
        server.listen(process.env.ORDER_SERVER_PORT, () => {
            console.log('Server is running');
        });
    }
}

module.exports = Server


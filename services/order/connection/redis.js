const IoRedis = require('ioredis');

class Redis {
    constructor() { }

    static async connect() {
        const redis = new IoRedis({
            port: process.env.REDIS_PORT,
            host: process.env.REDIS_HOST,
        });
        return redis
    }
}

module.exports = Redis
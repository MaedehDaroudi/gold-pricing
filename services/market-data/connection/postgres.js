const { Pool } = require('pg');
class PostgreSQL {
    constructor() { }

    static  connect() {
        const pool = new Pool({
            port: process.env.POSTGRES_PORT,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DATABASE,
            password: process.env.POSTGRES_PASSWORD,
        });
        return pool
    }

    async query(text, params) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res;
        } finally {
            client.release(); 
        }
    }

    async close() {
        await this.pool.end();
    }
}

module.exports = PostgreSQL
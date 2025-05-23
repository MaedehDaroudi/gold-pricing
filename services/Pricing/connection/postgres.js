const { Pool } = require('pg');
const Queries = require('../repository/queries')

class PostgreSQL {
    static pool;

    static async connect() {
        const config = {
            port: 5432,
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'IIJ01X2F',
        };

        let retries = 5;
        while (retries > 0) {
            try {
                this.pool = new Pool(config);
                const client = await this.pool.connect();
                await client.query('SELECT 1');
                client.release();
                console.log("Database connected.");
                return this.pool;
            } catch (err) {
                retries--;
                if (retries === 0) {
                    console.error("Database timeout");
                    throw err;
                }
                await new Promise(res => setTimeout(res, 5000));
            }
        }
        return this.pool;
    }

    static async query(text, params) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res;
        }
        finally {
            client.release();
        }
    }

    static async close() {
        await this.pool.end();
    }
}

module.exports = PostgreSQL;

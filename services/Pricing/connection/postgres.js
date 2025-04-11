const { Pool } = require('pg');
class PostgreSQL {
    constructor() { }

    static async connect() {
        const pool = new Pool({
            port: process.env.POSTGRES_PORT,
            user: process.env.POSTGRES_USER,
            host: process.env.PRICING_DB_HOST,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.PRICING_DB_DATABASE,
        });
        return pool
    }
}

module.exports = PostgreSQL
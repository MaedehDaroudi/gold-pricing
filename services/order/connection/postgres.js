const { Pool } = require('pg');
class PostgreSQL {
    constructor() { }

    static async connect() {
        const pool = new Pool({
            port: process.env.POSTGRES_PORT,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DATABASE,
            password: process.env.POSTGRES_PASSWORD,
        });
        return pool
    }
}

module.exports = PostgreSQL
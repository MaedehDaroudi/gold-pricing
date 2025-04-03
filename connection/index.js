const server=require('./server')
const Redis = require('./db/redis')
const Postgres = require('./db/postgres')

module.exports = {
    Redis,
    server,
    Postgres,
}
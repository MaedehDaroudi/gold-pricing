const server=require('./server')
const Redis = require('./redis')
const Postgres = require('./postgres')

module.exports = {
    Redis,
    Postgres,
}
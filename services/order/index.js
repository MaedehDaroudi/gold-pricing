require('dotenv').config();
const Server = require('./server')
const connection = require('./connection')

const server = Server.connect()
const redis = connection.Redis.connect()
const postgres = connection.Postgres.connect()


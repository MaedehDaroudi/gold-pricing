require('dotenv').config();
const connection = require('./connection')

const redis = connection.Redis.connect()
const server = connection.server.connect()
const postgres = connection.Postgres.connect()


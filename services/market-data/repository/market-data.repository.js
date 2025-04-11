const Queries = require("./queries")
const redis = require("../connection/redis")
const postgres = require('../connection/postgres')

class MarketDataRepository {
    constructor() { }

    async fetchMarketData(goldValue) {
        const { query, values } = Queries.insertMarkrtData(goldValue)
        await postgres.query(query, values);
        await redis.cacheDel('market-data')
        return 200
    }


    async receiveMarketData() {
        const redisValue = await redis.cacheGet('market-data')
        if (redisValue)
            return redisValue
        const data = await postgres.query(`select * from market_data`);
        await redis.CacheSet('market-data', data.rows[data.rows.length - 1])
        return data.rows[data.rows.length - 1]
    }
}

module.exports = MarketDataRepository
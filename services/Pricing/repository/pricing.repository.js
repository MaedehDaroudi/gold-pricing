const axios = require('axios');
const Queries = require('./queries')
const redis = require('../connection/redis')
const postgres = require('../connection/postgres')
class PricingRepository {
    constructor() { }

    async calculateDynamicPrice(marketData, goldInventory) {
        const percentage = goldInventory.currentQuantity * 100 / goldInventory.initialQuantity
        if (percentage > 50)
            return marketData.price
        else if (20 <= percentage <= 50)
            return marketData.price + (marketData.price * 5 / 100)
        else if (percentage < 20)
            return marketData.price + (marketData.price * 10 / 100)
    }

    async fetchMarketData(config) {
        await axios.request(config)
    }

    async receiveMarketData(config) {
        return (await axios.request(config)).data
    }

    async receiveGoldInventory(goldId) {
        const goldInventory = await redis.cacheGet('gold_inventory')
        if (goldInventory)
            return goldInventory
        const { query, value } = Queries.receiveGoldInventory(goldId)
        const result = await postgres.query(query, value)
        redis.CacheSet('gold_inventory', result.rows[result.rows.length - 1])
        return result.rows[result.rows.length - 1]
    }

}

module.exports = PricingRepository
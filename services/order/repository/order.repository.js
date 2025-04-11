const Queries = require('./queries')
const redis = require('../connection/redis')
const Response = require('../helper/response');
const postgres = require('../connection/postgres')
class OrderRepository {
    constructor() { }

    async createOrder(data) {
        const { query, value } = Queries.createOrder(data)
        await postgres.query(query, value)
        await redis.cacheDel('orders_data')
        return Response.messages.successCreateOrder;
    }

    async receiveMarketData(marketId) {
        const { query, value } = Queries.receiveMarketData(marketId)
        const result = await postgres.query(query, value)
        return result.rows[result.rows.length - 1]
    }

    async receiveGoldStatus(GoldStatusId) {
        const { query, value } = Queries.receiveGoldStatus(GoldStatusId)
        const result = await postgres.query(query, value)
        return result.rows[result.rows.length - 1]
    }

    async receiveUsers(userId) {
        const { query, value } = Queries.receiveUsers(userId)
        const result = await postgres.query(query, value)
        return result.rows[result.rows.length - 1]
    }

    async receiveGoldInventory(goldId) {
        const { query, value } = Queries.receiveGoldInventory(goldId)
        const result = await postgres.query(query, value)
        return result.rows[result.rows.length - 1]
    }
}

module.exports = OrderRepository
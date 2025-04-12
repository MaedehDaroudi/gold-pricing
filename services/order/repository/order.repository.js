const axios = require('axios');
const Queries = require('./queries')
const redis = require('../connection/redis')
const Response = require('../helper/response');
const postgres = require('../connection/postgres')
class OrderRepository {
    constructor() { }

    async createOrder(data) {
        const { query, value } = Queries.createOrder(data)
        await postgres.query(query, value)

        const updateInventoryQuery = Queries.updateInventory(data.weight, data.gold_id)
        await postgres.query(updateInventoryQuery.query, updateInventoryQuery.value)

        await redis.cacheDel('orders_data')
        await redis.cacheDel('gold_inventory')
        return Response.messages.successCreateOrder;
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

    async fetchMarketData() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '127.0.0.1:8002/api/market-data/fetch',
            headers: {}
        };
        try {
            await axios.request(config)
        }
        catch (error) {
            console.log("error ==>", error)
        }
    }

    async receiveMarketData() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8002/api/market-data',
            headers: {}
        };
        try {
            const result = await axios.request(config)
            return result.data
        }
        catch (error) {
            console.log("error ==>", error)
        }
    }
}

module.exports = OrderRepository
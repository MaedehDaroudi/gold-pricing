const response = require('../helper/response')
const Modles = require('../models/order.models')
const OrderRepository = require("../repository/order.repository")

const orderRepository = new OrderRepository()
class OrderBusinessLogic {
    constructor() { }

    async createOrder(data) {
        const [users, goldStatus, goldInventory, marketData] = await Promise.allSettled([
            orderRepository.receiveUsers(data.user_id),
            orderRepository.receiveGoldStatus(data.status_id),
            orderRepository.receiveGoldInventory(data.gold_id),
            orderRepository.receiveMarketData(data.market_data_id)
        ])

        const models = new Modles();

        await Promise.allSettled([
            this.#checkExist(users, 'user', models),
            this.#checkExist(goldStatus, 'goldStatus', models),
            this.#checkExist(marketData, 'marketData', models),
            this.#checkExist(goldInventory, 'goldInventory', models)
        ])

        const invalidData = models.invalidModel
        if (invalidData.length)
            throw response.generate(400, { invalidData })
        const result = await orderRepository.createOrder(data);
        return result
    }

    #checkExist(data, title, models) {
        if (data.status !== 'fulfilled' || !data.value)
            models.invalidModel = title

    }
}

module.exports = OrderBusinessLogic
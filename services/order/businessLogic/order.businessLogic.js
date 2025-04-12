const response = require('../helper/response')
const Models = require('../models/order.models')
const OrderRepository = require("../repository/order.repository")

const orderRepository = new OrderRepository()
class OrderBusinessLogic {
    constructor() { }

    async createOrder(data) {
        const [users, goldStatus, goldInventory, marketData] = await Promise.allSettled([
            orderRepository.receiveUsers(data.user_id),
            orderRepository.receiveGoldStatus(data.status_id),
            orderRepository.receiveGoldInventory(data.gold_id),
        ])
        await this.#checkAbilityContinues(data, users, goldStatus, goldInventory)
        await orderRepository.fetchMarketData()
        data.market_data_id = (await orderRepository.receiveMarketData()).data?.result?.id
        const result = await orderRepository.createOrder(data);
        return result
    }

    async receiveOrders(data) {
        const result = await orderRepository.receiveOrders(data)
        if (!result.length)
            throw response.generate(404,response.messages.notFoundOrder)
        return result
    }

    async #checkAbilityContinues(data, users, goldStatus, goldInventory) {
        const models = new Models();
        await Promise.allSettled([
            this.#checkValid(users, 'user', models),
            this.#checkValid(goldStatus, 'goldStatus', models),
            this.#checkValid(goldInventory, 'goldInventory', models)
        ])
        const invalidData = models.invalidModel
        if (invalidData.length)
            throw response.generate(404, { invalidData })

        await Promise.all([
            this.#isActive(goldStatus),
            this.#hasQuantity(data.weight, goldInventory),
            this.#isValidStatus(goldInventory),
        ])
    }

    #checkValid(data, title, models) {
        if (data.status !== 'fulfilled' || !data.value)
            models.invalidModel = title
    }

    #hasQuantity(weight, goldInventory) {
        if (goldInventory.value.currentQuantity < weight)
            throw response.generate(400, response.messages.InsufficientProductInventory)
    }

    #isValidStatus(goldInventory) {
        if (goldInventory.value.status_id !== 1)
            throw response.generate(400, response.messages.InsufficientProductInventory)
    }
    #isActive(goldStatus) {
        if (goldStatus.value.id !== 1)
            throw response.generate(400, response.messages.goldNotActive)
    }
}

module.exports = OrderBusinessLogic
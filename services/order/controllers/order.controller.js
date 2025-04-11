const Dtos = require('../dtos/order.dtos')
const Response = require('../helper/response')
const OrderBusinessLogic = require('../businessLogic/order.businessLogic')
const orderBusinessLogic = new OrderBusinessLogic()
class OrderController {
    constructor() { }

    async createOrder(req, res) {
        try {
            const dtos = new Dtos();
            dtos.createOrderModel = req.body
            const createOrderModel = dtos.createOrderModel
            const result = await orderBusinessLogic.createOrder(createOrderModel)
            res.send(Response.generate(200, result))
        }
        catch (error) {
            res.status(error.status || 500).send(error)
        }
    }
}

module.exports = OrderController
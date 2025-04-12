const Dtos = require('../dtos/order.dtos')
const Response = require('../helper/response')
const OrderBusinessLogic = require('../businessLogic/order.businessLogic')
const orderBusinessLogic = new OrderBusinessLogic()
class OrderController {
    constructor() { }

    async createOrder(req, res) {
        try {
            const dtos = new Dtos();
            dtos.createOrderDto = req.body
            const createOrderDto = dtos.createOrderDto
            const result = await orderBusinessLogic.createOrder(createOrderDto)
            return Response.generate(200, result)
        }
        catch (error) {
            res.status(error.status || 500).send(error)
        }
    }
}

module.exports = OrderController
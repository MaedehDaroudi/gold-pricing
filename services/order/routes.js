const schema = require('./schema/order.schema')
const OrderController = require('./controllers/order.controller')
const validateSchema = require('./middleware/order.middleware')
const orderController = new OrderController()
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await orderController.receiveOrders(req, res)
    res.send(result)
})

router.post('/', validateSchema(schema.createOrder), async (req, res) => {
    const result = await orderController.createOrder(req, res)
    res.send(result)
})

module.exports = router;
const schema = require('./schema/order.schema')
const OrderController = require('./controllers/order.controller')
const validateSchema = require('./middleware/order.middleware')
const orderController = new OrderController()
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(200)
})

router.post('/', validateSchema(schema.createOrder), async (req, res) => {
    const result = await orderController.createOrder(req, res)
    console.log("result ==> ", result)
    res.send(200)
})

module.exports = router;
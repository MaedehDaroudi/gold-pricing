const schema = require('./schema/pricing.schema')
const PricingController = require('./controllers/pricing.controller')
const validateSchema = require('./middleware/pricing.middleware')
const pricingController = new PricingController()
const express = require('express');
const router = express.Router();

router.get('/gold', async (req, res) => {
    const result = await pricingController.calculateDynamicPrice(req, res)
    res.send(result)
})

module.exports = router;
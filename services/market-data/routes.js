const Controller = require('./controllers/market-data.controller')
const controller = new Controller()
const express = require('express');
const router = express.Router();
router.get('/fetch', async (req, res) => {
    return await controller.fetchMarketData(req, res)
});

router.get('/', async (req, res) => {
    return await controller.receiveMarketData(req, res)
})

module.exports = router;
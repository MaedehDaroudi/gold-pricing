const Controller = require('./controllers/market-data.controller')
const controller = new Controller()
const express = require('express');
const router = express.Router();
router.get('/fetch', (req, res) => {
    return controller.fetchMarketData(req, res)
});

router.get('/', (req, res) => {
    return controller.receiveMarketData(req, res)
})

module.exports = router;
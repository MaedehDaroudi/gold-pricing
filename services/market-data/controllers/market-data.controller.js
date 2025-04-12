const Response = require('../helper/response')
const MarketDataDtos = require('../dtos/market-data.dto')
const MarketDataBusinessLogic = require('../businessLogic/market-data.bussinessLogic')
const marketDataBusinessLogic = new MarketDataBusinessLogic()


class MarketDataController {
    constructor() {

    }

    async fetchMarketData(req, res) {
        const marketDataDtos = new MarketDataDtos();
        marketDataDtos.fetchGoldDataDto = null
        const fetchGoldDataDto = marketDataDtos.fetchGoldDataDto
        const result = await marketDataBusinessLogic.fetchMarketData(fetchGoldDataDto)
        res.send(Response.generate(200, { message: 'اطلاعات با موفقیت دریافت شد.' }))
    }

    async receiveMarketData(req, res) {
        const marketDataDtos = new MarketDataDtos();
        marketDataDtos.receiveGoldDataDto = null
        const receiveGoldDataDto = marketDataDtos.receiveGoldDataDto
        const result = await marketDataBusinessLogic.receiveMarketData(receiveGoldDataDto)
        res.send(Response.generate(200, result))
    }
}

module.exports = MarketDataController
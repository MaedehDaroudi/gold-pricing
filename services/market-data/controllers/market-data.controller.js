const Response = require('../helper/response')
const MarketDataDtos = require('../dtos/market-data.dto')
const MarketDataBusinessLogic = require('../businessLogic/market-data.bussinessLogic')
const marketDataBusinessLogic = new MarketDataBusinessLogic()


class MarketDataController {
    constructor() {

    }

    async fetchMarketData(req, res) {
        const marketDataDtos = new MarketDataDtos();
        marketDataDtos.fetchGoldDataModel = null
        const fetchGoldDataModel = marketDataDtos.fetchGoldDataModel
        const result = await marketDataBusinessLogic.fetchMarketData(fetchGoldDataModel)
        res.send(Response.generate(200, { message: 'اطلاعات با موفقیت دریافت شد.' }))
    }

    async receiveMarketData(req, res) {
        const marketDataDtos = new MarketDataDtos();
        marketDataDtos.receiveGoldDataModel = null
        const receiveGoldDataModel = marketDataDtos.receiveGoldDataModel
        const result = await marketDataBusinessLogic.receiveMarketData(receiveGoldDataModel)
        res.send(Response.generate(200, result))
    }
}

module.exports = MarketDataController
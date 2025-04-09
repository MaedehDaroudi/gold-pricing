const MarketDataDtos = require('../dtos/market-data.dto')
const MarketDataBusinessLogic = require('../businessLogic/market-data.bussinessLogic')
const mrketDataBusinessLogic = new MarketDataBusinessLogic()


class MarketDataController {
    constructor() {

    }

    async receiveMarketData(req, res) {
        const marketDataDtos = new MarketDataDtos();
        marketDataDtos.receiveGoldDataModel = null
        const receiveGoldDataModel = marketDataDtos.receiveGoldDataModel
        marketDataBusinessLogic.receiveMarketData(receiveGoldDataModel)
    }
}
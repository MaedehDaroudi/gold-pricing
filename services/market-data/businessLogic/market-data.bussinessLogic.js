const axios = require('axios');
const MarketDataRepository = require('../repository/market-data.repository')

class MarketDataBussinesLogic {
    constructor() { }

    async fetchMarketData(config) {
        const goldValue = await this.#goldApi(config)
        const marketDataRepository = new MarketDataRepository();
        const result = await marketDataRepository.fetchMarketData(goldValue.data);
        return result
    }


    async receiveMarketData() {
        const marketDataRepository = new MarketDataRepository();
        const result = await marketDataRepository.receiveMarketData();
        return result

    }


    async #goldApi(config) {
        return axios.request(config)
    }
}

module.exports = MarketDataBussinesLogic
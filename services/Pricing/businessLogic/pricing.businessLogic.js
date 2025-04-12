const PricingRepository = require('../repository/pricing.repository')
const pricingRepository = new PricingRepository
class PricingBusinessLogic {
    constructor() {

    }

    async pricingBusinessLogic(data) {
        await pricingRepository.fetchMarketData(data.fetchMarketDataConfig);
        const marketData = await pricingRepository.receiveMarketData(data.receiveMarketDataConfig)
        const goldInventory = await pricingRepository.receiveGoldInventory(1)
        const result = await pricingRepository.calculateDynamicPrice(marketData.data?.result, goldInventory)
        return result
    }
}

module.exports = PricingBusinessLogic
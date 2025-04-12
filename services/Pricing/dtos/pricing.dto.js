class Dtos {
    #calculateDynamicPrice
    constructor() {
        this.#calculateDynamicPrice = {}
    }

    set calculateDynamicPriceDto(data) {
        this.#calculateDynamicPrice = {
            fetchMarketDataConfig: {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:8002/api/market-data/fetch',
                headers: {}
            },
            receiveMarketDataConfig: {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:8002/api/market-data/',
                headers: {}
            }

        }
    }

    get calculateDynamicPriceDto() {
        return this.#calculateDynamicPrice;
    }
}

module.exports = Dtos
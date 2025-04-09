class MarketDataDtol {
    #receiveGolData;
    constructor() {
        this.#receiveGolData = {
            url: null,
            method: null,
            headers: null,
            maxBodyLength: null,
        }
    }

    set receiveGoldDataModel(data) {
        this.#receiveGolData = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.goldapi.io/api/XAU/USD',
            headers: { 'x-access-token': 'goldapi-1jpism92pvoea-io' }
        }
    }

    get receiveGoldDataModel() {
        return this.#receiveGolData;
    }
}

module.exports = MarketDataDtol
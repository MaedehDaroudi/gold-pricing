class MarketDataDtol {
    #fetchGolData;
    #receiveGoldData;
    constructor() {
        this.#fetchGolData = {
            url: null,
            method: null,
            headers: null,
            maxBodyLength: null,
        }
        this.#receiveGoldData = null
    }

    set fetchGoldDataModel(data) {
        this.#fetchGolData = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.goldapi.io/api/XAU/USD',
            headers: { 'x-access-token': 'goldapi-1jpism92pvoea-io' }
        }
    }

    set receiveGoldDataModel(data) {
        this.#receiveGoldData = {}
    }

    get fetchGoldDataModel() {
        return this.#fetchGolData;
    }

    get receiveGoldDataModel() {
        return this.#receiveGoldData;
    }
}

module.exports = MarketDataDtol
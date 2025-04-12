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

    set fetchGoldDataDto(data) {
        this.#fetchGolData = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.goldapi.io/api/XAU/USD',
            headers: { 'x-access-token': 'goldapi-1jpism92pvoea-io' }
        }
    }

    set receiveGoldDataDto(data) {
        this.#receiveGoldData = {}
    }

    get fetchGoldDataDto() {
        return this.#fetchGolData;
    }

    get receiveGoldDataDto() {
        return this.#receiveGoldData;
    }
}

module.exports = MarketDataDtol
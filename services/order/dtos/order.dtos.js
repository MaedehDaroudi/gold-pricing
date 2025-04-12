class Dtos {
    #createOrder
    constructor() {
        this.#createOrder = {}
    }

    set createOrderModel(data) {
        this.#createOrder = {
            weight: data.weight,
            user_id: data.user_id,
            gold_id: data.gold_id,
            location: data.location || null,
            status_id: data.status_id,
            total_price: data.total_price,
            price_per_gram: data.price_per_gram,
            market_data_id: null,
        }
    }

    get createOrderModel() {
        return this.#createOrder
    }
}

module.exports = Dtos
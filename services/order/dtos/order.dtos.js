class Dtos {
    #createOrder;
    #receiveOrders;

    constructor() {
        this.#createOrder = {}
        this.#receiveOrders = {}
    }

    set createOrderDto(data) {
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

    set receiveOrdersDtoModel(data) {
        this.#receiveOrders = {
            id:data.id
        }
    }

    get createOrderDto() {
        return this.#createOrder
    }

    get receiveOrdersDtoModel() {
        return this.#receiveOrders
    }
}

module.exports = Dtos
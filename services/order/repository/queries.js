class Queries {
    constructor() { }


    static createOrder(data) {
        return {
            query: `
            insert into orders
            (user_id,gold_id,weight,price_per_gram,total_price,market_data_id,status_id,location,deleted)
            values
            ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
            value: [
                data.user_id, data.gold_id, data.weight, data.price_per_gram, data.total_price,
                data.market_data_id, data.status_id, data.location, false
            ]
        }
    }

    static receiveOrders(id) {
        const result = {
            query: `select * from orders`,
            value: []
        }
        if (id) {
            result.query += ' where id=$1'
            result.value.push(+id)
        }
        return result
    }

    static updateInventory(weight, gold_id) {
        return {
            query: `UPDATE "gold_inventory" SET "currentQuantity"  = "currentQuantity"  - $1 WHERE id = $2;`,
            value: [weight, gold_id]
        }
    }

    static receiveMarketData(marketId) {
        return {
            query: `select * from market_data where id=$1`,
            value: [+marketId]
        }
    }

    static receiveGoldStatus(GoldStatusId) {
        return {
            query: `select * from gold_status where id=$1`,
            value: [+GoldStatusId]
        }
    }

    static receiveUsers(userId) {
        return {
            query: `select * from users where id=$1`,
            value: [+userId]
        }
    }

    static receiveGoldInventory(goldId) {
        return {
            query: `select * from gold_inventory where id=$1`,
            value: [+goldId]
        }
    }
}

module.exports = Queries
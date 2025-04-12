class Queries {
    constructor() { }


    static receiveGoldInventory(goldId) {
        return {
            query: `select * from gold_inventory where id=$1`,
            value: [+goldId]
        }
    }
}

module.exports = Queries
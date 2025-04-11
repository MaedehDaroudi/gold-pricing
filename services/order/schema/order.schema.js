const createOrder = {
    type: "object",
    properties: {
        weight: { type: "number", minimum: 0 },
        user_id: { type: "integer", minimum: 1 },
        gold_id: { type: "integer", minimum: 1 },
        status_id: { type: "integer", minimum: 1 },
        total_price: { type: "number", minimum: 0 },
        location: { type: "string", maxLength: 255 },
        price_per_gram: { type: "number", minimum: 0 },
        market_data_id: { type: "integer", minimum: 1 },
    },
    required: ["user_id", "gold_id", "weight", "price_per_gram", "total_price", "market_data_id", "status_id"],
    additionalProperties: false
};

module.exports = { createOrder };

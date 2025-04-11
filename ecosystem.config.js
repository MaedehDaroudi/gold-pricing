module.exports = {
    apps: [
        {
            name: "market-data-service",
            script: "./services/market-data/index.js",
            watch: true,
        },
        {
            name: "orders-service",
            script: "./services/order/index.js",
            watch: true,
        },
        {
            name: "pricing-service",
            script: "./services/pricing/index.js",
            watch: true,
        },
       
    ]
}

class Queries {
    constructor() { }

    static initDb() {
        return `
        CREATE TABLE IF NOT EXISTS market_data (
            id SERIAL PRIMARY KEY,
            timestamp BIGINT,
            metal TEXT,
            currency TEXT,
            exchange TEXT,
            symbol TEXT,
            prev_close_price NUMERIC,
            open_price NUMERIC,
            low_price NUMERIC,
            high_price NUMERIC,
            open_time BIGINT,
            price NUMERIC,
            ch NUMERIC,
            chp NUMERIC,
            ask NUMERIC,
            bid NUMERIC,
            price_gram_24k NUMERIC,
            price_gram_22k NUMERIC,
            price_gram_21k NUMERIC,
            price_gram_20k NUMERIC,
            price_gram_18k NUMERIC,
            price_gram_16k NUMERIC,
            price_gram_14k NUMERIC,
            price_gram_10k NUMERIC
        );`
    }

    static insertMarkrtData(insertValue) {
        return {
            query: `INSERT INTO market_data (
            timestamp, metal, currency, exchange, symbol, prev_close_price,
            open_price, low_price, high_price, open_time, price, ch, chp,ask,
            bid, price_gram_24k, price_gram_22k, price_gram_21k,price_gram_20k,
            price_gram_18k, price_gram_16k, price_gram_14k,price_gram_10k)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 
             $14, $15, $16, $17, $18, $19, $20, $21, $22, $23);`,
            values: [
                insertValue.timestamp,
                insertValue.metal,
                insertValue.currency,
                insertValue.exchange,
                insertValue.symbol,
                insertValue.prev_close_price,
                insertValue.open_price,
                insertValue.low_price,
                insertValue.high_price,
                insertValue.open_time,
                insertValue.price,
                insertValue.ch,
                insertValue.chp,
                insertValue.ask,
                insertValue.bid,
                insertValue.price_gram_24k,
                insertValue.price_gram_22k,
                insertValue.price_gram_21k,
                insertValue.price_gram_20k,
                insertValue.price_gram_18k,
                insertValue.price_gram_16k,
                insertValue.price_gram_14k,
                insertValue.price_gram_10k
            ]
        }
    }
}

module.exports = Queries
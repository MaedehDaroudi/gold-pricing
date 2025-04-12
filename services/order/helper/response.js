const uuidv4 = require('uuid');

class Response {
    constructor() { }

    static generate(status, result) {
        return {
            status,
            data: {
                id: uuidv4.v4(),
                result
            }
        }

    }

    static messages = {
        notFoundOrder:'سفارش یافت نشد',
        successCreateOrder: 'سفارش با موفقیت ثبت شد',
        InsufficientProductInventory: 'موجودی محصول کافی نیست',
        goldNotActive: 'ثبت سفارش فقط برای طلا با وضعیت فعال ممکن است' ,
    }
}

module.exports = Response
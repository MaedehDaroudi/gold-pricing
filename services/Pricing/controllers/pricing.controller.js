const Dtos = require('../dtos/pricing.dto')
const response = require('../helper/response')
const PricingBusinessLogic = require('../businessLogic/pricing.businessLogic.js')

const pricingBusinessLogic = new PricingBusinessLogic();

class PricingController {
    constructor() {

    }

    async calculateDynamicPrice(req, res) {
        const dto = new Dtos()
        dto.calculateDynamicPriceDto = req.params
        const calculateDynamicPriceDto = dto.calculateDynamicPriceDto
        const result = await pricingBusinessLogic.pricingBusinessLogic(calculateDynamicPriceDto)
        return response.generate(200, { price: result })
    }
}
module.exports = PricingController
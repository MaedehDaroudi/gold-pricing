class Models {
    #invalidValue;
    constructor() {
        this.#invalidValue = new Set()
    }

    set invalidModel(value) {
        this.#invalidValue.add(value)
    }

    get invalidModel() {
        return Array.from(this.#invalidValue);
    }
}

module.exports = Models
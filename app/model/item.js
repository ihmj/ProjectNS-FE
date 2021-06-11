class Item {
    constructor(thing,quantity) {
        this.thing = thing
        this.quantity = quantity
    }
    toString() {
        return `${this.thing} ${this.quantity}`
    }
}
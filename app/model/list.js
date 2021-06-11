class List {
    constructor(shop, date, archived,sup) {
        this.shop = shop
        this.date = date
        this.archived = archived
        this.sup = sup
    }
    toString() {
        return `${this.shop} ${this.date}`
    }
}

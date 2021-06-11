class ModelItem {
    constructor() {
        this.api = new ItemAPI()
    }
    async getAllItems() {
        //return await this.api.getAll()
        let items = []
        for (let item of await this.api.getAllItems()) {
            items.push(Object.assign(new Item(), item))
        }
        return items
    }

    async getItem(id) {
        try {
            const item = Object.assign(new Item(), await this.api.getList(id))
            return list
        } catch (e) {
            if (e === 404) return null
            return undefined
        }
    }

    delete(id) {
        return this.api.delete(id).then(res => res.status)
    }

    insert(item) {
        return this.api.insert(item).then(res => res.status)
    }

    update(item) {
        return this.api.update(item).then(res => res.status)
    }

    getByListID(list_id){
        return this.api.getByListID(list_id).then(res => res.status)
    }
}
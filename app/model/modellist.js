class ModelList {
    constructor() {
        this.api = new ListAPI()
    }
    async getAllLists() {
        //return await this.api.getAll()
        let lists = []
        for (let list of await this.api.getAllLists()) {
            list.date = new Date(list.date)
            lists.push(Object.assign(new List(), list))
        }
        return lists
    }

    async getList(id) {
        try {
            const list = Object.assign(new List(), await this.api.getList(id))
            list.date = new Date(list.date)
            return list
        } catch (e) {
            if (e === 404) return null
            return undefined
        }
    }

    delete(id) {
        return this.api.delete(id).then(res => res.status)
    }

    insert(list) {
        return this.api.insert(list).then(res => res.status)
    }

    update(list) {
        return this.api.update(list).then(res => res.status)
    }
}
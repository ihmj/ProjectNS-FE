const serviceBaseUrlitem = "http://localhost:3333/item"

class ItemAPI{
    getAllItems() {
        return fetchJSON(serviceBaseUrlitem)
    }
    getItem(item_id) {
        return fetchJSON(`${serviceBaseUrlitem}/${item_id}`)
    }
    delete(item_id) {
        return fetch(`${serviceBaseUrlitem}/${item_id}`,  { method: 'DELETE' })
    }
    insert(item) {
        this.headers.set( 'Content-Type', 'application/json' )
        return fetch(serviceBaseUrlitem, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(item)
        })
    }
    update(item) {
        this.headers.set( 'Content-Type', 'application/json' )
        return fetch(serviceBaseUrlitem, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(item)
        })
    }

    getByListID(list_id){
        return fetchJSON(`${serviceBaseUrlitem}/list/${list_id}`)
    }
}
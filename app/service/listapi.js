const serviceBaseUrllist = "http://localhost:3333/list"

class ListAPI{
    getAllLists() {
        return fetchJSON(serviceBaseUrllist)
    }
    getList(id) {
        return fetchJSON(`${serviceBaseUrllist}/${id}`)
    }
    delete(id) {
        return fetch(`${serviceBaseUrllist}/${id}`,  { method: 'DELETE' })
    }
    insert(list) {
        this.headers.set( 'Content-Type', 'application/json' )
        return fetch(serviceBaseUrllist, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(list)
        })
    }
    update(list) {
        this.headers.set( 'Content-Type', 'application/json' )
        return fetch(serviceBaseUrllist, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(list)
        })
    }
}
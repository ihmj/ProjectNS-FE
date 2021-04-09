const serviceBaseUrl = "http://localhost:3333/car"

class ListAPI {
    getAll() {
        return fetchJSON(serviceBaseUrl)
    }
    get(id) {
        return fetchJSON(`${serviceBaseUrl}/${id}`)
    }
    delete(id) {
        return fetch(`${serviceBaseUrl}/${id}`, { method: 'DELETE' })
    }
    insert(list) {
        return fetch(serviceBaseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(list)
        })
    }
    update(list) {
        return fetch(serviceBaseUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(list)
        })
    }
}

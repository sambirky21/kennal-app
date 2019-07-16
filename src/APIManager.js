const remoteURL = "http://localhost:5002"

export default {
        getAll(element) {
            return fetch(`${remoteURL}/${element}`)
            .then( e => e.json())
        },

        removeAndList(element, id) {
            return fetch(`${remoteURL}/${element}/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => {
                return this.getAll(element)
            })
        }
}
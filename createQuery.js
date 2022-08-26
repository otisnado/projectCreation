import axios from "axios"

function createQueries(url_in, queries_in, basicAuth_in) {
    var url = url_in
    var queries = queries_in
    var basicAuth = 'Basic ' + basicAuth_in
    Promise.all(queries.map(async query => {
        const result = await axios.post(url, query, {
            headers: { 'Authorization': basicAuth }
        })
        return result
    })).then((result) => {
        console.log(result, 'Ya se termino la request')
    }).catch((error => {
        console.log('revento', error)
    }))
}

export { createQueries }
import axios from "axios"

function createFolder(url_in, data_folder_in, basicAuth_in) {
    var config = {
        method: 'post',
        url: url_in,
        headers: {
            'Authorization': 'Basic ' + basicAuth_in,
            'Content-Type': 'application/json'
        },
        data: data_folder_in
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("Folder for queries created succesfully")
        })
        .catch(function (error) {
            console.log("############################################################### Create folder ##############################################################################################")
            console.log(JSON.stringify(error))
            console.log("############################################################################################################################################################################")
        });
}

function createQueries(url_in, queries_in, basicAuth_in) {
    var url = url_in
    var queries = queries_in
    var basicAuth = 'Basic ' + basicAuth_in
    Promise.all(queries.map(async query => {
        axios.post(url, query, {
            headers: { 'Authorization': basicAuth }
        })
    })).then((result) => {
        // console.log(result, 'Ya se termino la request')
        console.log("Queries in folder created succesfully")
    }).catch((error => {
        console.log("############################################################### Create queries ##############################################################################################")
        console.log(JSON.stringify(error))
        console.log("#############################################################################################################################################################################")
    }))
}

export { createQueries, createFolder }
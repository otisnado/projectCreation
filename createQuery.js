require('dotenv').config();
var axios = require('axios');
//let queryName = "getTask";

var queries = [
    {
        "name": "Query1",
        "path": "Shared Queries/Query1",
        "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
    },
    {
        "name": "Query2",
        "path": "Shared Queries/Query2",
        "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
    },
    {
        "name": "Query3",
        "path": "Shared Queries/Query3",
        "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
    }
]

var url = 'https://' + process.env.ADO_SERVER + '/' + process.env.ADO_COLLECTION + '/' + process.env.ADO_PROJECT + '/_apis/wit/queries/Shared queries/' + '?api-version=' + process.env.ADO_API_VERSION

var password = process.env.ADO_TOKEN;
var basicAuth = 'Basic ' + password;

Promise.all(queries.map(async query => {
    const result = await axios.post(url, query, {
        headers: {'Authorization': basicAuth}
    })
    return result
})).then((result) => {
    console.log(result, 'Ya se termino la request')
}).catch((error => {
    console.log('revento', error)
}))
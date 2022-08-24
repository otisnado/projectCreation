require('dotenv').config();
var axios = require('axios');
//let queryName = "getTask";

var queries = [
    {
        "name": "projectBacklog_ReleasesAndUserStories",
        "path": "Shared Queries/projectBacklog_ReleasesAndUserStories",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN ('Releases', 'Historia de usuario') AND [System.State] <> '' AND [System.AreaPath] = '"+ process.env.ADO_PROJECT +"'"
    },
    {
        "name": "impedimentsInCurrentSprint",
        "path": "Shared Queries/impedimentsInCurrentSprint",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Impediment' AND [System.IterationPath] = @currentIteration('["+ process.env.ADO_PROJECT +"]\\"+ process.env.ADO_PROJECT +" Team')"
    },
    {
        "name": "getAllUserStories",
        "path": "Shared Queries/getAllUserStories",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Historia de usuario' AND [System.State] <> ''"
    },
    {
        "name": "backlogInCurrentSprintByState",
        "path": "Shared Queries/backlogInCurrentSprintByState",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Historia de usuario' AND [System.State] IN ('En proceso', 'Listo', 'Por Hacer') AND [System.IterationPath] = @currentIteration('["+ process.env.ADO_PROJECT +"]\\"+ process.env.ADO_PROJECT +" Team')"
    },
    {
        "name": "tasksInCurrentSprint",
        "path": "Shared Queries/tasksInCurrentSprint",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Task' AND [System.State] <> '' AND [System.IterationPath] = @currentIteration('["+ process.env.ADO_PROJECT +"]\\"+ process.env.ADO_PROJECT +" Team')"
    },
    {
        "name": "testCasesAndBugsProject",
        "path": "Shared Queries/testCasesAndBugsProject",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN ('Test Case', 'Bug') AND [System.State] <> '' AND [System.AreaPath] = '"+ process.env.ADO_PROJECT +"'"
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
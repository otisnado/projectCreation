import "dotenv/config"
const ado_server = process.env.ADO_SERVER
const collection = process.env.ADO_COLLECTION
const base_url = 'https://' + ado_server + '/' + collection
const api_version = process.env.ADO_API_VERSION
const token = process.env.ADO_TOKEN
const basicAuth = btoa('Basic:' + token)
const process_id = process.env.ADO_PROCESS_ID
const source_control_type = process.env.ADO_SOURCE_CONTROL_TYPE
const new_project = process.env.ADO_PROJECT
const project_config = '{"name":"' + new_project + '","description": "Frabrikam travel app for Windows Phone","capabilities": {"versioncontrol": {"sourceControlType": "' + source_control_type + '"},"processTemplate": {"templateTypeId": "' + process_id + '"}}}'
const queries = [
    {
        "name": "projectBacklog_ReleasesAndUserStories",
        "path": "Shared Queries/projectBacklog_ReleasesAndUserStories",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN ('Releases', 'Historia de usuario') AND [System.State] <> '' AND [System.AreaPath] = '" + process.env.ADO_PROJECT + "'"
    },
    {
        "name": "impedimentsInCurrentSprint",
        "path": "Shared Queries/impedimentsInCurrentSprint",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Impediment' AND [System.IterationPath] = @currentIteration('[" + process.env.ADO_PROJECT + "]\\" + process.env.ADO_PROJECT + " Team')"
    },
    {
        "name": "getAllUserStories",
        "path": "Shared Queries/getAllUserStories",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Historia de usuario' AND [System.State] <> ''"
    },
    {
        "name": "backlogInCurrentSprintByState",
        "path": "Shared Queries/backlogInCurrentSprintByState",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Historia de usuario' AND [System.State] IN ('En proceso', 'Listo', 'Por Hacer') AND [System.IterationPath] = @currentIteration('[" + process.env.ADO_PROJECT + "]\\" + process.env.ADO_PROJECT + " Team')"
    },
    {
        "name": "tasksInCurrentSprint",
        "path": "Shared Queries/tasksInCurrentSprint",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Task' AND [System.State] <> '' AND [System.IterationPath] = @currentIteration('[" + process.env.ADO_PROJECT + "]\\" + process.env.ADO_PROJECT + " Team')"
    },
    {
        "name": "testCasesAndBugsProject",
        "path": "Shared Queries/testCasesAndBugsProject",
        "wiql": "SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM workitems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN ('Test Case', 'Bug') AND [System.State] <> '' AND [System.AreaPath] = '" + process.env.ADO_PROJECT + "'"
    }
]

export {
    ado_server,
    collection,
    base_url,
    api_version,
    basicAuth,
    process_id,
    source_control_type,
    new_project,
    project_config,
    queries
}
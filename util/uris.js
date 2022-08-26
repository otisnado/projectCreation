import {
    base_url,
    api_version,
    new_project,
} from './globalVariables.js'

var create_project_url = base_url + '/' + '_apis/projects?api-version=' + api_version
var create_query_url = base_url + '/' + new_project + '/_apis/wit/queries/Shared queries/' + '?api-version=' + api_version

export {
    create_project_url,
    create_query_url
}


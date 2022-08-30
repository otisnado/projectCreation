import {
    base_url,
    api_version,
    new_project,
    folder_name
} from './globalVariables.js'

var create_project_url = base_url + '/' + '_apis/projects?api-version=' + api_version
var create_folder_url = base_url + '/' + new_project + '/_apis/wit/queries/Shared Queries?api-version=' + api_version
var create_query_url = base_url + '/' + new_project + '/_apis/wit/queries/Shared Queries/' + folder_name + '?api-version=' + api_version
var create_widgets_url = base_url + '/' + new_project + '/' + new_project + ' Team/_apis/dashboard/dashboards/423d8a03-af9b-47c0-a88a-f47d8680acf4/widgets' + '?api-version=' + api_version + '-preview.2'
var list_bashboards_url = base_url + '/' + new_project + '/' + new_project + ' Team/_apis/dashboard/dashboards' + '?api-version=' + api_version + '-preview.2'

export {
    create_project_url,
    create_folder_url,
    create_query_url,
    create_widgets_url,
    list_bashboards_url
}


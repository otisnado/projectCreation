import { createProject } from "./createProject.js"
import { createQueries, createFolder } from "./createQuery.js"
import { createWidgetsProcess } from "./createWidgetsProcess.js"
import { basicAuth, data_folder, project_config, queries, widgets } from "./util/globalVariables.js"
import { create_project_url, create_query_url, create_folder_url, create_widgets_url } from "./util/uris.js"

createProject(create_project_url, project_config, basicAuth)
setTimeout(() => {
    createFolder(create_folder_url, data_folder, basicAuth)
}, 4000);
setTimeout(function () {
    createQueries(create_query_url, queries, basicAuth);
}, 5000);
setTimeout(function () {
    createWidgetsProcess()
}, 8000);
setTimeout(function () {
    createWidgetsProcess()
}, 9000);
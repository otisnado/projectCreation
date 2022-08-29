import { createProject } from "./createProject.js"
import { createQueries } from "./createQuery.js"
import { createWidgets } from "./createWidgets.js"
import { basicAuth, project_config, queries, widgets } from "./util/globalVariables.js"
import { create_project_url, create_query_url, create_widgets_url } from "./util/uris.js"

createProject(create_project_url, project_config, basicAuth)
setTimeout(function () {
    createQueries(create_query_url, queries, basicAuth);
}, 5000);
//createQueries(create_query_url, queries, basicAuth)
//setTimeout("Ya estuvo", 5000);
//createWidgets(create_widgets_url, widgets, basicAuth)
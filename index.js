import { createProject } from "./createProject.js"
import { createQueries } from "./createQuery.js"
import { basicAuth, project_config, queries } from "./util/globalVariables.js"
import { create_project_url, create_query_url } from "./util/uris.js"

createProject(create_project_url, project_config, basicAuth)
createQueries(create_query_url, queries, basicAuth)

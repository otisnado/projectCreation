import axios from "axios"
import { getPrincipalDashboard } from "./util/getPrincipalDashboard.js"
import { createWidgets } from "./util/createWidgets.js"
import { base_url, new_project, api_version, widgets, basicAuth } from "./util/globalVariables.js"

function createWidgetsProcess() {
    getPrincipalDashboard().then((result) => {
        const url = base_url + '/' + new_project + '/' + new_project + ' Team/_apis/dashboard/dashboards/' + result?.dashboardEntries[0]?.id + '/widgets' + '?api-version=' + api_version + '-preview.2'
        createWidgets(url, widgets, basicAuth)
    }).catch((error => {
        //console.log('revento', error)
        //console.log(basicAuth)
    }))
}

export { createWidgetsProcess }
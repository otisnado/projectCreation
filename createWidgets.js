import axios from "axios"
import { getPrincipalDashboard } from "./util/dashboard.js"

function createWidgets(url_in, widgets_in, basicAuth_in) {
    const dashboard_info = getPrincipalDashboard()
    console.log(dashboard_info)
}

export { createWidgets }
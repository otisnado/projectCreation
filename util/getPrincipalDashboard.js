import axios from "axios";
import { basicAuth } from "./globalVariables.js";
import { list_bashboards_url } from "./uris.js";

async function getPrincipalDashboard() {
    let url = list_bashboards_url
    var config = {
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + basicAuth
        }
    };

    return await axios(config).then(function (response) { return response.data }).catch(function (error) { console.log(error); });
}

export { getPrincipalDashboard }
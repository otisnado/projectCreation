import axios from "axios"
import { basicAuth, widgets } from "./globalVariables.js"

function createWidgets(url_in, widgets_in, basicAuth_in) {
    var url = url_in
    var widgets = widgets_in
    var basicAuth = basicAuth_in

    Promise.all(widgets.map(async widget => {
        const result = await axios.post(url, widget, {
            headers: { 'Authorization': basicAuth }
        })
        return result
    })).then((result) => {
        console.log(result, 'Ya se termino la request')
    }).catch((error => {
        //console.log('revento', error)
        console.log(basicAuth)
    }))

}

export { createWidgets }
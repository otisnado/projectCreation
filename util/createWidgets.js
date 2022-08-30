import axios from "axios"

function createWidgets(url_in, widgets_in, basicAuth_in) {

    Promise.all(widgets_in.map(async widget => {
        const result = await axios.post(url_in, widget, {
            headers: {
                'Authorization': 'Basic ' + basicAuth_in,
                'Content-Type': 'application/json'
            }
        })
        return result
    })).then((result) => {
        // console.log(result, 'Ya se termino la request')
        console.log("Widgets created succesfully")

    }).catch((error => {
        console.log("############################################################### Create widgets ##############################################################################################")
        console.log(JSON.stringify(error));
        console.log("#############################################################################################################################################################################")
    }))

}

export { createWidgets }
import "dotenv/config"
import axios from "axios";

function createProject(uri_in, project_config_in, basicAuth_in) {
  var url = uri_in
  var data = project_config_in
  var basicAuth = basicAuth_in

  var config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + basicAuth
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      console.log("Project created succesfuly")
    })
    .catch(function (error) {
      console.log("#############################################################################################################################################################")
      console.log(error);
      console.log("#############################################################################################################################################################")
    });
}

export { createProject }

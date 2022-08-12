require('dotenv').config();
console.log(process.env);
var axios = require('axios');
var data = JSON.stringify({
  "name": process.env.ADO_PROJECT + Math.floor(Math.random() * 1000),
  "description": "Frabrikam travel app for Windows Phone",
  "capabilities": {
    "versioncontrol": {
      "sourceControlType": process.env.ADO_SOURCE_CONTROL_TYPE
    },
    "processTemplate": {
      "templateTypeId": process.env.ADO_PROCESS_ID
    }
  }
});

var config = {
  method: 'post',
  url: 'https://' + process.env.ADO_SERVER + '/' + process.env.ADO_COLLECTION + '/' + '_apis/projects?api-version=' + process.env.ADO_API_VERSION,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic ' + process.env.ADO_TOKEN
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

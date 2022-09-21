const axios = require("axios");
const app = require('./app');
var userData;
var output;

exports.handler = async (event) => {
  
  
    userData = await app.makeRequest();
    
    output = [];
  
    for(let i=0;i<userData.length; i++)
    {
      output.push({"lastName":userData[i]["names"][0]["lastName"], "firstName": userData[i]["names"][0]["firstName"]})
      
    }
    
    return{
      data: JSON.stringify(output)
    }
          
};

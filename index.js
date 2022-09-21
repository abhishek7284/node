const app = require('./app');
let userData;
let output;

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

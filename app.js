const axios = require("axios");
const BASE_URL = `https://integrate.elluciancloud.com`;
let auth;

async function makeRequest() {
  
  const token=await axios({
          method:"POST",
          url : BASE_URL + '/auth',
          headers: {
              "content-type":"application/x-www-form-urlencoded",
              "Authorization":"Bearer "
                   }
      });
      
  auth=JSON.stringify(token['data']);
  auth=auth.substring(1,auth.length-1);
  
  const userData=await axios({
          method:"GET",
          url : BASE_URL + '/api/persons',
          headers: {
                  "content-type":"application/x-www-form-urlencoded",
                  "Authorization":"Bearer "+auth
                   }
      });
		  
		     
  return userData['data'];
   
          
}   


module.exports = { makeRequest };
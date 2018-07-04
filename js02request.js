console.log("Hello request");
var request =require('request');
request('http://192.168.0.147:8090/sp07jsonView2/',function(error,response,body){
  console.log('error:',error);
  console.log('statusCode:', response &&response.statusCode);
  console.log('body:',body);
});

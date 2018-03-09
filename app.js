var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=<your api key>';

var server = http.createServer(function(request,response)
{

var request = require('request');
request(url,function(err,res,body){

var data =JSON.parse(body);
response.write("<html><body><div id = 'container'>");
response.write("<h1>"+'City name - :'+data["name"]+'<br>'+"</h1>");
response.write("<h2>"+ 'Temperature - :'+data["temp"]+'<br>'+"</h2>");
response.write("</div></body></html>");
response.end();




// response.write(body);

});



}).listen(8081);



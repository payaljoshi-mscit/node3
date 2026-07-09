var http = require('http');
var fs = require('fs');

var httpserver = http.createServer(function(request, response) 
{
  if(request.url=="/")
  {
    fs.readFile("./public/index.html",(err,data)=>{
        response.write(data)
        response.end();
    })
  }
}).listen(8080, function() {
    console.log((new Date()) + 
      ' Server is listening on port 8080');
});


var http = require('http');
var a ;

http.createServer(function(request, response){
    response.writeHead(200);
    request.on('data', function(chunk){
	response.write(chunk);
	a = chunk;
	response.write(a);
});

request.on('end', function(){
    response.end();
});
}).listen(8080);

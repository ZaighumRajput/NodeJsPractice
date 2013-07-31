var http = require('http');

var makeRequest = function(message){

var options = {
host:'localhost' port:8080, path: '/', method: 'POST'
}

var request = http.request(options, functions(responst){
    response.on('data', functions(data){
	console.log(data);
});
});

request.write(message); //begin request
request.end();
};

makeRequest("Help! Help!");

exports = makeRequest;

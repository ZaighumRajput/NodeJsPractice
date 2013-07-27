var fs = require('fs'); // Require Filesystem module
var http = require('http');

http.createServer(function(request, response) {

    var newFile = fs.createWriteStream("UploadedX.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;

    request.pipe(newFile);

    request.on('data', function(chunk) {
	uploadedBytes += chunk.length;
	var progress = (uploadedBytes / fileBytes)* 100;
	response.write("progress: " + parseInt(progress, 10) + "%\n");

});
    request.on('end', function(){
	response.end('Succesfully uploaded');});
}).listen(8080);

var fs = require('fs'); // Require Filesystem module
var http = require('http');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("UploadedX.md");
    request.pipe(newFile);

    request.on('end', function() {
	response.end('Succesfully Uploaded');
});

}).listen(8080);

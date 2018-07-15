var http = require('http'); // NodeJs OOB Module
var dt = require('./myfirstmodule');  // Self Created module


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(4000);
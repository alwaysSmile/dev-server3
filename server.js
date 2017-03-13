//************
//Debug с помощью webstorm, нужно,
//чтобы запускалась node, а не supervisor
var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function (req, res) {
    var urlParsed = url.parse(req.url, true);
    debugger;

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;
    res.end('Page no found')
});

server.listen(1337);
console.log('Server is running');
//************


const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write("Hola mundo a mi primer servidor")

}).listen(4444)
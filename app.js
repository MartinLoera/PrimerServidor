const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./WWW/file.txt')

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write(data)
    res.end()
}).listen(4444)


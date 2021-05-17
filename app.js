const http = require("http");
const fs = require("fs");

//const data = fs.readFileSync('./WWW/file.txt')

http
  .createServer((req, res) => {
    console.log(req.url);
    const file = req.url == "/" ? "./WWW/file.txt" : `./WWW${req.url}`;
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Not found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(4444);

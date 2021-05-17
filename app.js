const http = require("http");
const fs = require("fs");

//const data = fs.readFileSync('./WWW/file.txt')

http.createServer((req, res) => {
    console.log(req.url);
    const file = req.url == "/" ? "./WWW/file.txt" : `./WWW${req.url}`;
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("Not found");
            res.end();
        } else {
            const extension = file.split(".").pop();
            switch (extension) {
                case "txt":
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    break;

                case "html":
                    res.writeHead(200, { "Content-Type": "text/html" });
                    break;
                case "jpeg":
                    res.writeHead(200, { "Content-Type": "image/jpeg" });
                    break;
                case "css":
                    res.writeHead(200, { "Content-Type": "text/css" });
                    break;
                case "js":
                    res.writeHead(200, { "Content-Type": "text/javascript" });
                    break;
                default:
                    break;
            }
            res.write(data);
            res.end();
        }
    });
}).listen(4444);

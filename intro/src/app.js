// const { sayHI, calculateTwo } = require("../utils");
// const koko = require("../utils");

const http = require("http");

http.createServer((req, res) => {
    console.log("server is running on port 3000");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello from nodejs");
    res.end;
}).listen(3000);

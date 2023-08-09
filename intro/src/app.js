// const { sayHI, calculateTwo } = require("../utils");
// const koko = require("../utils");

// const http = require("http");
// const fs = require("fs");
// const os = require("os");

// console.log();

// http.createServer((req, res) => {
//     console.log("server is running on port 3000");
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write("Hello from nodejs, am making a change. This is another change");
//     res.end;
// }).listen(3000);

const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
    res.json({
        name: "koko",
        email: "koko@gmail.com",
    });
});

app.get("/hello", (req, res) => {
    res.send("THis is hello");
});

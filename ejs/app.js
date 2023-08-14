const express = require("express");
// const ejs = require("ejs");

const app = express();
const port = 5000;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const name = "KOKO";
    res.render("pages/index", { name });
    // res.send("hello");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

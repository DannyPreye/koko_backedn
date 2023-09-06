const express = require("express");
const formidable = require("formidable");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/");
    },
    filename: function (req, file, cb) {
        const suffix = Date.now();

        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
// const ejs = require("ejs");

const app = express();
const port = 5000;
let students = [
    {
        name: "Koko",
        level: "Backend",
    },
    {
        name: "Tari",
        level: "Frontend",
    },
    {
        name: "James",
        level: "Backend",
    },
    {
        name: "Seun",
        level: "Beginner",
    },
];

app.use(express.json());
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const name = "KOKO";
    res.render("pages/index", { name });
    // res.send("hello");
});

app.get("/about", (req, res) => {
    res.render("pages/about", { students });
});

app.get("/create-user", (req, res) => {
    res.render("pages/form");
});
app.post("/create-user", (req, res) => {
    console.log("bdjkhdsfjdhskhfdksjhahg", req.body);
    const { name, level } = req.body;

    if (name && level) {
        const findUser = students.find((student) => student.name == name);
        if (findUser) {
            return res.status(400).json({
                message: "User already exist",
                success: false,
            });
        }
        students.push({ name, level });
        return res.status(201).json({
            message: "User has been created successfully",
            success: true,
        });
    } else {
        return res.status(400).json({
            message: "name and level is required",
            success: false,
        });
    }
});

app.delete("/delete-user", (req, res) => {
    const { name } = req.body;
    const findUser = students.find((student) => student.name == name);
    if (findUser) {
        const filterOutUser = students.filter(
            (student) => student.name !== name
        );
        students = filterOutUser;

        return res.status(200).json({
            message: "User has been deleted",
            success: true,
        });
    } else {
        return res.status(400).json({
            message: "user not found",
            success: false,
        });
    }
});

app.get("/delete-user", (req, res) => {
    res.render("pages/delete-user");
});

app.get("/file-handler", (req, res) => {
    res.render("pages/file-handler");
});
app.post("/file-handler", upload.single("profile_pic"), (req, res) => {
    console.log(req.file);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

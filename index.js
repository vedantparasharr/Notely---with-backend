const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, data) => {
    res.render("index", { files: data });

    if (err) console.log(err); // this will show the real issue
  });
});

app.get("/note/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf8", (err, data) => {
    if (err) console.log(err);
    res.render("note", { file: data, filename: req.params.filename });
  });
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf8", (err, data) => {
    if (err) console.log(err);
    res.render("edit", { title: req.params.filename, note: data });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.trim().split(" ").join("-").toLowerCase()}.txt`,
    req.body.note,
    (err) => {
      if (err) console.log(err);
      res.redirect("/");
    }
  );
});

app.post("/edit", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.trim().split(" ").join("-").toLowerCase()}.txt`,
    req.body.note,
    (err) => {
      console.log("edited");
      if (err) console.log(err);
    }
  );
  if (
    req.body.prevTitle !==
    req.body.title.trim().split(" ").join("-").toLowerCase() + ".txt"
  ) {
    fs.rm(`./files/${req.body.prevTitle}`, (err) => {
      console.log("deleted");
      if (err) console.log(err);
    });
  }
  res.redirect("/");
});

app.get("/delete/:filename", (req, res) => {
    fs.rm(`./files/${req.params.filename}`, (err) => {
      res.redirect("/");
      console.log("deleted");
      if (err) console.log(err);
    });
  }
);

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/profile/:username", (req, res) => {
  res.send(req.params.username);
});

app.listen(3000, () => {
  console.log('Server is ruunin at http://localhost:3000')
})
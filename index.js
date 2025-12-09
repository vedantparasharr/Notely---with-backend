const path = require("path");
const express = require("express");
const app = express();

function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.length === 0) {
    return ""; // Handle empty or non-string inputs
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  res.send("Welcome, " + capitalizeFirstLetter(req.params.username));
});

app.get("/profile/:username/:age", (req, res) => {
  res.send(`Welcome, ${capitalizeFirstLetter(req.params.username)}
    You are ${req.params.age} years old.
    `);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

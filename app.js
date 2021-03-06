const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("Example app listening on port 3000test node!");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/home", function (request, response) {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

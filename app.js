const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Listnening to this server
app.listen(4000);

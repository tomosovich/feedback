//import express library, note the lack of support for ES2015 modules
//which could use import express from 'express'; node doesn't support yet
const express = require("express");
//creates our app, which will have associated routes registered at runtime
const app = express();

//create route handler and associate it with a given route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);

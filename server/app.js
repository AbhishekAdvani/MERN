const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn.js");
const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res?.send("hello server");
});
app.get("/about", middleware, (req, res) => {
  res?.send("hello about server");
});
app.get("/signIn", (req, res) => {
  res?.send("hello signIn server");
});
app.get("/signUp", (req, res) => {
  res?.send("hello signUp server");
});
app.get("/contact", (req, res) => {
  res?.send("hello contact server");
});

app?.listen(PORT, () => {
  console.log(`🚀 ~ file: App.js:9 ~ server is running on ${PORT}`);
});

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE;
const PORT = process.env.PORT;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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

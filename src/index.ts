//entry point for app
import dotenv from "dotenv";
import express from "express";

//importing routes
import routes from "./routes";

//connecting to db
const mongoose = require("mongoose");

//initializing
dotenv.config();
const app = express();

//initializing port
const port = process.env.SERVER_PORT;

//connecting to db server
mongoose.connect("mongodb://localhost:27017/crud", (error:any) => {
  if (!error) {
    console.log("successfully connected to db");
  } else {
    console.log("failed to connect db");
  }
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

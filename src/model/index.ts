//connecting to db
const mongoose = require("mongoose");
// import * as mongoose from "mongoose";

//connecting to db server
mongoose.connect("mongodb://localhost:27017/crud", (error: any) => {
  if (!error) {
    console.log("successfully connected to db");
  } else {
    console.log("failed to connect db");
  }
});

const Students = require("./studentModel");

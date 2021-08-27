// const mongoose = require("mongoose");
import * as mongoose from "mongoose";

var ClassSchema = new mongoose.Schema({
  standard: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
    unique: true,
  },
});

const Classes = mongoose.model("Classes", ClassSchema);

export default Classes;

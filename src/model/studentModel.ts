// const mongoose = require("mongoose");
import * as mongoose from "mongoose";

var StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll_number: {
    type: Number,
    required: true,
  },
  mobile_number: {
    type: Number,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
  },
});

const students = mongoose.model("Students", StudentSchema);

export default students;

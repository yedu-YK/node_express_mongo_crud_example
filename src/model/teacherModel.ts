// const mongoose = require("mongoose");
import * as mongoose from "mongoose";

var TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employee_id: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

const teacher = mongoose.model("Teachers", TeacherSchema);

export default teacher;

import express from "express";
import {
  getAStudent,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controller";

const router = express.Router();

router.route("/register").post(createStudent);
router.route("/show").get(getAllStudents);
router.route("/show/:id").get(getAStudent);
router.route("/update/:id").post(updateStudent);
router.route("/delete/:id").post(deleteStudent);

export default router;

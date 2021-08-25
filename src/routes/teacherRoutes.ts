import express from "express";
import {
  getATeacher,
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller";

const router = express.Router();

router.route("/register").post(createTeacher);
router.route("/show").get(getAllTeachers);
router.route("/show/:id").get(getATeacher);
router.route("/update/:id").post(updateTeacher);
router.route("/delete/:id").post(deleteTeacher);

export default router;

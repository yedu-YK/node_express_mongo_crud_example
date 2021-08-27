import express from "express";
import {
  getATeacher,
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  classesTeacher,
} from "../controller";

const router = express.Router();
router.route("/").get(getAllTeachers);

router.route("/register").post(createTeacher);

router.route("/classes/:teacher_id").get(classesTeacher)

router
  .route("/:id")
  .get(getATeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export default router;

import express from "express";
import {
  getAStudent,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  studentDivision,
  studentsInClass,
} from "../controller";

const router = express.Router();

router.route("/").get(getAllStudents);

router.route("/register").post(createStudent);

router.route("/division/:division_id").get(studentDivision);
router.route("/division/:division_id/:standard_id").get(studentsInClass);

router
  .route("/:id")
  .get(getAStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;

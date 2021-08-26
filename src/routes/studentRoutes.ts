import express from "express";
import {
  getAStudent,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controller";

const router = express.Router();

router.route("/").get(getAllStudents);

router.route("/register").post(createStudent);

router
  .route("/:id")
  .get(getAStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;

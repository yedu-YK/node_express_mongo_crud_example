import express from "express";
import {
  getATeacher,
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller";

const router = express.Router();
router.route("/").get(getAllTeachers);

router.route("/register").post(createTeacher);

router
  .route("/:id")
  .get(getATeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export default router;

import express from "express";
import {
  getAClasses,
  getAllClasses,
  createClass,
  updateClasses,
  deleteClasses,
} from "../controller";

const router = express.Router();
router.route("/").get(getAllClasses);

router.route("/register").post(createClass);

router
  .route("/:id")
  .get(getAClasses)
  .patch(updateClasses)
  .delete(deleteClasses);

export default router;

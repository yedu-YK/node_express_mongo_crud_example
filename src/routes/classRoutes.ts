import express from "express";
import {
  getAClass,
  getAllClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../controller";

const router = express.Router();

router.route("/register").post(createClass);
router.route("/show").get(getAllClasses);
router.route("/show/:id").get(getAClass);
router.route("/update/:id").post(updateClass);
router.route("/delete/:id").post(deleteClass);

export default router;

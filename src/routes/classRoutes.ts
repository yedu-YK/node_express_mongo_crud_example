import express from "express";
import {
  getAClasses,
  getAllClasses,
  createClass,
  updateClasses,
  deleteClasses,
  divisionStandard
} from "../controller";

const router = express.Router();
router.route("/").get(getAllClasses);

router.route("/register").post(createClass);

router.route("/division/:standard").get(divisionStandard);

router
  .route("/:id")
  .get(getAClasses)
  .patch(updateClasses)
  .delete(deleteClasses);

export default router;

import { Router } from "express";
import {
  // addCourse,
  // getCourse,
  getCoaching,
  updateCoaching,
  deleteCoaching,
  // updateCourse,
  addCoaching,
  getSpecificCoaching,
} from "../controllers/coaching.controller.js";
const router = Router();

router.post("/addCoaching", addCoaching);
router.get("/getCoaching/", getCoaching);
router.get("/getSpecificCoaching/:id", getSpecificCoaching);
router.delete("/deleteCoaching/:id", deleteCoaching);
router.put("/updateCoaching/:id", updateCoaching);

export default router;

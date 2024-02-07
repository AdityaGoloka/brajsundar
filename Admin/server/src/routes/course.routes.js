import { Router } from "express";
import {
  addCourse,
  deleteCourse,
  getCourse,
  getSpecificCourse,
  updateCourse,
} from "../controllers/course.controller.js";
const router = Router();

router.post("/addCourse", addCourse);
router.get("/getCourse", getCourse);
router.get("/getCourse/:id", getSpecificCourse);
router.delete("/deleteCourse/:id", deleteCourse);
// router.get("/getArticle/:id", getArticle);
router.put("/updateCourse/:id", updateCourse);

export default router;

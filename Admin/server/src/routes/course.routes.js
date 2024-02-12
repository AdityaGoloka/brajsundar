import { Router } from "express";
<<<<<<< Updated upstream
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
=======
import { addCourse } from "../controllers/course.controller.js";
const router = Router();

router.post("/addCourse", addCourse);
// router.get("/getArticles", getArticles);
// router.delete("/deleteArticle/:id", deleteArticle);
>>>>>>> Stashed changes
// router.get("/getArticle/:id", getArticle);
router.put("/updateCourse/:id", updateCourse);

export default router;

import { Router } from "express";
import { addCourse } from "../controllers/course.controller.js";
const router = Router();

router.post("/addCourse", addCourse);
// router.get("/getArticles", getArticles);
// router.delete("/deleteArticle/:id", deleteArticle);
// router.get("/getArticle/:id", getArticle);
// router.put("/updateArticle/:id", updateArticle);

export default router;

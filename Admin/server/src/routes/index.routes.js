import { Router } from "express";
const router = Router();
import bookRoutes from "../routes/books.routes.js";
import reelRoutes from "./../routes/reels.routes.js";
import reviewRouter from "./../routes/review.routes.js";
import youtubeRouter from "./../routes/youtube.routes.js";
import articleRouter from "./article.routes.js";
import authRouter from "./auth.routes.js";
import profileRouter from "../routes/profile.routes.js";
import courseRouter from "../routes/course.routes.js";
import workshopRouter from "../routes/workshop.routes.js";

router.use("/reels", reelRoutes);
router.use("/reviews", reviewRouter);
router.use("/youtube", youtubeRouter);
router.use("/books", bookRoutes);
router.use("/articles", articleRouter);
router.use("/user", authRouter);
router.use("/user", profileRouter);
router.use("/course", courseRouter);
router.use("/workshop", workshopRouter);

export default router;

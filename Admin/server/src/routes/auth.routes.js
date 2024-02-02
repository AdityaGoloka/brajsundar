import { Router } from "express";
import { login, signUp } from "../controllers/user.controller.js";
const router = Router();

router.post("/login", login);
router.post("/signup", signUp);

export default router;

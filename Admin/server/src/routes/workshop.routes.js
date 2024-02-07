import { Router } from "express";
import { addWorkshop, getWorkshops, getWorkshop, deleteWorkshop, updateWorkshop } from "../controllers/workshop.controller.js";
const router = Router();

router.post("/addWorkshop", addWorkshop);
router.get("/getWorkshops", getWorkshops);
router.get("/getWorkshop/:id", getWorkshop);
router.delete("/deleteWorkshop/:id", deleteWorkshop);
router.put("/updateWorkshop/:id", updateWorkshop);

export default router;

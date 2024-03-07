import express from "express";
import { addBuilding } from "../controllers/buildingController";
const router = express.Router();

router.post("/", addBuilding);
router.get("/");

export default router;

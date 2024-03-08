import express from "express";
import { addBuilding, getBuilding } from "../controllers/buildingController";
const router = express.Router();

router.post("/", addBuilding);
router.get("/", getBuilding);

export default router;

import express from "express";
import { addFloors, fetchFloors } from "../controllers/floorController";
const router = express.Router();

router.post("/", addFloors);
router.get("/", fetchFloors);

export default router;

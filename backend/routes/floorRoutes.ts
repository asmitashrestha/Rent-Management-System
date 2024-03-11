import express from "express";
import {
  addFloors,
  fetchFloors,
  updateFloor,
} from "../controllers/floorController";
import verifyToken from "../validators/verifyToken";
const router = express.Router();

router.post("/", verifyToken, addFloors);
router.get("/", verifyToken, fetchFloors);
router.put("/:id", verifyToken, updateFloor);

export default router;

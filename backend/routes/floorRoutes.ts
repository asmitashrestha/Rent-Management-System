import express from "express";
import {
  addFloors,
  fetchFloor,
  updateFloor,
} from "../controllers/floorController";
import verifyToken from "../validators/verifyToken";
const router = express.Router();

router.post("/", verifyToken, addFloors);
router.get("/:floorNumber", verifyToken, fetchFloor);
router.put("/:id", verifyToken, updateFloor);

export default router;

import express from "express";
import {
  addBuilding,
  getBuilding,
  removeBuilding,
  updateBuilding,
} from "../controllers/buildingController";
import verifyToken from "../validators/verifyToken";
const router = express.Router();

router.post("/", verifyToken, addBuilding);
router.get("/", verifyToken, getBuilding);
router.put("/:id", verifyToken, updateBuilding);
router.delete("/:id", verifyToken, removeBuilding);

export default router;

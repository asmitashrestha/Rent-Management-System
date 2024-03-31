import express from "express";
import { addBill, fetchBill, updateBIll } from "../controllers/billController";
const router = express.Router();

router.post("/:id", addBill);
router.get("/:id", fetchBill);
router.put("/:id", updateBIll);

export default router;

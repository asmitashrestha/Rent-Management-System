import express from "express";
import { addPayment } from "../controllers/paymentController";
import { getLatestPayment, getPayments } from "../repository/paymentRepository";
const router = express.Router();

router.post("/", addPayment);
router.get("/", getPayments);
router.get("/:id", getLatestPayment);

export default router;

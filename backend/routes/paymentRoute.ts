import express from "express";
import { addPayment } from "../controllers/paymentController";
import { getLatestPayment, getPayments } from "../repository/paymentRepository";
const router = express.Router();

router.post("/:cid", addPayment);
router.get("/all/:cid", getPayments);
router.get("/:id", getLatestPayment);

export default router;

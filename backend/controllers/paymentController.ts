import { Request, Response } from "express";
import {
  getLatestPayment,
  getPayments,
  postPayment,
} from "../repository/paymentRepository";
import { getLatestBill } from "../repository/billRepository";

export const addPayment = async (req: Request, res: Response) => {
  const { id, paidAmount } = req.body;

  try {
    const response = await postPayment(id, paidAmount);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(201).json({ message: "Payment Created" });
  } catch (error) {
    console.log("error",error.message);
    
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchPayments = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const response = await getPayments(id);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchLatestPayment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await getLatestPayment(id);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import {
  getLatestPayment,
  getPayments,
  postPayment,
} from "../repository/paymentRepository";
import { getLatestBill } from "../repository/billRepository";
import {
  getCustomerById,
  putBIllAmount,
  updatePaidBalance,
} from "../repository/customerRepository";

export const addPayment = async (req: Request, res: Response) => {
  const id = req.params.cid;
  const { paidAmount } = req.body;

  try {
    const response = await postPayment(id, paidAmount);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
console.log("id",id);
console.log("paidamount",paidAmount);


    const customer = await getCustomerById(id);
    console.log("cstomer",customer);
    
    const { billAmount } = customer.dataValues;
    const paid = parseInt(paidAmount, 10);
    const remaining = billAmount - paid;
    try {
      await updatePaidBalance(id, paid, remaining);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "error in updating paid balance" });
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
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchLatestPayment = async (req: Request, res: Response) => {
  const { cid } = req.params;

  try {
    const response = await getLatestPayment(cid);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

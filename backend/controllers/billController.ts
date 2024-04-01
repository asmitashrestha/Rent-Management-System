import { Request, Response } from "express";
import {
  getABIll,
  getLatestBill,
  postBIll,
  putBIll,
} from "../repository/billRepository";
import {
  getCustomerById,
  putBIllAmount,
} from "../repository/customerRepository";
import { getFloorById } from "../repository/floorRepository";
import { updateAmounts } from "./customerController";

export const addBill = async (req: Request, res: Response) => {
  const cId = req.params.id;
  const {
    floorRent,
    electricityCharges,
    waterCharges,
    internetCharges,
    others,
  } = req.body;

  // Converting string to number
  const rent = parseInt(floorRent, 10);
  const electricity = parseInt(electricityCharges, 10);
  const water = parseInt(waterCharges, 10);
  const internet = parseInt(internetCharges, 10);
  const numericOthers = parseInt(others, 10);

  // getting customer's previous details
  try {
    const customer = await getCustomerById(cId);
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }
    const { fId, customerName, billAmount, remainingAmount } =
      customer.dataValues;
    const previousAmount = parseInt(remainingAmount, 10);
    const previousBill = parseInt(billAmount, 10);

    // Finding rent
    const floorRent = await getFloorById(fId);
    const { price } = floorRent.dataValues;
    const floorPrice = parseInt(price, 10);

    const total =
      floorPrice +
      electricity +
      water +
      internet +
      numericOthers +
      previousAmount;

    // Creating bill
    try {
      const response = await postBIll(
        cId,
        customerName,
        floorPrice,
        electricityCharges,
        waterCharges,
        internetCharges,
        others,
        previousAmount,
        total
      );
      if (!response) {
        return res.status(400).json({ message: "Something went wrong" });
      }

      // Update bill amount in Customer
      const newBill = previousBill + total;
      await putBIllAmount(cId, newBill);

      return res.status(201).json({ message: "BIll Created Successfully" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};

export const fetchBill = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id",id);
  
  try {
    const response = await getLatestBill(id);
    if (!response) {
      return res.status(400).json({ message: "Cannot fetch bill" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    console.log("error occured",error.message)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateBIll = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    cId,
    customerName,
    floorRent,
    electricityCharges,
    waterCharges,
    internetCharges,
    others,
    previousAmount,
    total,
  } = req.body;

  const checkBIll = await getABIll(id);
  if (!checkBIll) {
    return res.status(400).json({ message: "Bill not found" });
  }
  try {
    const response = await putBIll(
      cId,
      id,
      customerName,
      floorRent,
      electricityCharges,
      waterCharges,
      internetCharges,
      others,
      previousAmount,
      total
    );
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

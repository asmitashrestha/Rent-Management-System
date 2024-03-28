import { Request, Response } from "express";
import {
  getCustomer,
  getCustomerById,
  getLatestCustomer,
  postCustomer,
  putAmounts,
} from "../repository/customerRepository";

// export const addCustomer = async (req: Request, res: Response) => {
//   const fId = req.params.id;
//   const { customerName, floorNumber } = req.body;

//   try {
//     const response = await postCustomer(fId, customerName, floorNumber);
//     if (!response) {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//     return res.status(201).json({ message: "Customer Added Successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };

export const addCustomer = async (req: Request, res: Response) => {
  const fId = req.params.id;
  const { customerName} = req.body;

  try {
    const response = await postCustomer(fId, customerName);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(201).json({ message: "Customer Added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchCustomer = async (req: Request, res: Response) => {
  const { fId } = req.body;
  // const { id } = req.params;
  try {
    const response = await getCustomer(fId);
    if (!response) {
      return res.status(500).json({ message: "Cannot fetch customer" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    console.log("Error occcured    ..,cm;kcm;l",error);
    
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchLatestCustomer = async (req: Request, res: Response) => {
  const fId = req.params.id;
  try {
    const response = await getLatestCustomer(fId);
    if (!response) {
      return res.status(500).json({ message: "Cannot fetch customer" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateAmounts = async (req: Request, res: Response) => {
  const cId = req.params.id;
  const { id, billAmount, paidAmount } = req.body;

  const remainingAmount = billAmount - paidAmount;

  try {
    const response = await putAmounts(
      cId,
      id,
      billAmount,
      paidAmount,
      remainingAmount
    );
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Amounts updated" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const changeCustomer = async (req: Request, res: Response) => {
  const fId = req.params.id;
  // const { id } = req.params;
  const { id, customerName } = req.body;

  const user = await getCustomerById(id);
  console.log(user);
  res.status(200).send({ user });
  // const {fId} = user.fId
  // if(!user){
  //   return res.status(400).json({message:"The customer doesn't exist"})
  // }

  // try {
  //   const response = await postCustomer(
  //     fId,
  //     customerName,
  //     floorNumber,
  //     previousBalance,
  //     currentBillAmount,
  //     paidAmount,
  //     remainingBalance
  //   );
  //   if (!response) {
  //     return res.status(400).json({ message: "Something went wrong" });
  //   }
  //   return res.status(201).json({ message: "Customer Updated Successfully" });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ message: "Something went wrong" });
  // }
};

export const removeCustomer = async (req: Request, res: Response) => {};

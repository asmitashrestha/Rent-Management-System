import { Request, Response } from "express";
import { getFloors, postFloor } from "../repository/floorRepository";

export const addFloors = async (req: Request, res: Response) => {
  const { bId, floorNumber, price } = req.body;

  try {
    const response = await postFloor(bId, floorNumber, price);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(201).json({ message: "Floor Created Successfully" });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchFloors = async (req: Request, res: Response) => {
  const { bId } = req.body;
  try {
    const response = await getFloors(bId);
    if (!response) {
      return res.status(500).json({ message: "Cannot fetch floors" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

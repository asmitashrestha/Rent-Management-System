import { Request, Response } from "express";
import {
  getFloorById,
  getFloors,
  postFloor,
  putFloor,
} from "../repository/floorRepository";
import { fetchBuilding } from "../repository/buildingRepository";

export const addFloors = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { floorNumber, price } = req.body;

  //checking building of the user
  const checkForBuilding = await fetchBuilding(userId);
  if (!checkForBuilding) {
    return res.status(400).json({ message: "Building doesn't exist" });
  }
  const bId = checkForBuilding[0].dataValues.id;

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
  const userId = req.userId;
  //checking building of the user
  const checkForBuilding = await fetchBuilding(userId);
  if (!checkForBuilding) {
    return res.status(400).json({ message: "Building doesn't exist" });
  }
  const bId = checkForBuilding[0].dataValues.id;

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

export const updateFloor = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { id } = req.params;
  const { price } = req.body;

  //checking building of the user
  const checkForBuilding = await fetchBuilding(userId);
  if (!checkForBuilding) {
    return res.status(400).json({ message: "Building doesn't exist" });
  }
  const bId = checkForBuilding[0].dataValues.id;

  const checkFloor = await getFloorById(id);
  if (!checkFloor) {
    return res.status(400).json({ message: "Floor not found" });
  }

  try {
    const response = await putFloor(bId, id, price);
    if (!response) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Floor updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

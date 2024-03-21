import { Request, Response } from "express";
import {
  getFloorById,
  getFloorByNumber,
  getFloors,
  postFloor,
  putEmpty,
  putFloor,
} from "../repository/floorRepository";
import { fetchBuilding } from "../repository/buildingRepository";

export const addFloors = async (req: Request, res: Response) => {
  const userId = req.userId;
  console.log(req.params);
  const { floorNumber } = req.params;
  const { price } = req.body;
console.log("params",req.params);

  // Check if userId is available in the request
  if (!userId) {
    return res.status(400).json({ message: "User ID is missing from request" });
  }

  try {
    // Check if building exists for the user
    const checkForBuilding = await fetchBuilding(userId);
    if (!checkForBuilding || checkForBuilding.length === 0) {
      return res.status(400).json({ message: "Building doesn't exist for the user" });
    }   
    const bId = checkForBuilding[0].dataValues.id;

    // Create the floor
    const response = await postFloor(bId, floorNumber, price);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong while creating the floor" });
    }
    return res.status(201).json({ message: "Floor Created Successfully" });
  } catch (error) {
    console.error("Error adding floor:", error);
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

export const fetchFloor = async (req: Request, res: Response) => {
  const { floorNumber } = req.params;

  const response = await getFloorByNumber(floorNumber);
  console.log("response",response);
  
  return response
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

export const clearRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await putEmpty(id);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Floor has become empty" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

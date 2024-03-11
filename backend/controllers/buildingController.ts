import { Request, Response } from "express";
import {
  deleteBuilding,
  fetchBuilding,
  putBuilding,
  registration,
} from "../repository/buildingRepository";

export const addBuilding = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { floors } = req.body;
  try {
    const response = await registration(userId, floors);
    if (response) {
      res.status(201).json({ message: "New Building Created Successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getBuilding = async (req: Request, res: Response) => {
  const userId = req.userId;
  const response = await fetchBuilding(userId);
  if (!response) {
    return res.status(400).json({ message: "Could not find the building" });
  }
  return res.status(200).send(response);
};

export const updateBuilding = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { id } = req.params;
  const { floors } = req.body;
  try {
    const response = await putBuilding(userId, id, floors);
    if (response) {
      res.status(200).json({ message: "Update successful" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const removeBuilding = async (req: Request, res: Response) => {
  const userId = req.userId;
  const { id } = req.params;
  try {
    const response = await deleteBuilding(userId, id);
    if (!response) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

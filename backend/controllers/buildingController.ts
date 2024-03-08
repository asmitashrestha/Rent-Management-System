import { Request, Response } from "express";
import { fetchBuilding, registration } from "../repository/buildingRepository";

export const addBuilding = async (req: Request, res: Response) => {
  // later use this after using jwt
  // const userId = req.userId;
  const { userId, floors } = req.body;
  console.log(req.body);
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
  // const {userId}=req.userId
  const { userId } = req.body;
  const response = await fetchBuilding(userId);
  if (!response) {
    return res.status(400).json({ message: "Could not find the building" });
  }
  return res.status(200).send(response);
};

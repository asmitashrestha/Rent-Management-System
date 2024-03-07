import { Request, Response } from "express";
import { registration } from "../repository/buildingRepository";

export const addBuilding = async (req: Request, res: Response) => {
  // later use this after using jwt
  // const userId = req.userId;
  const { userId, floors } = req.body;
  try {
    const response = await registration(userId, floors);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

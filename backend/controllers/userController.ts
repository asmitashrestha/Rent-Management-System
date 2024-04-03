import { Request, Response } from "express";
import { findUser, registerUser } from "../repository/userRepository";
import { bcryptString } from "../services/hash";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { jwtToken } from "../services/jwt";

export const register = async (req: Request, res: Response) => {
  //validation
  const { userName, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ message: errors.array() });
  }

  //hashing password
  const hashedPassword = await bcryptString(password);

  try {
    // Checking if email exists in database
    const user = await findUser(email);
    console.log(user);
    if (user) {
      return res.status(400).json({ message: "This email is already in use" });
    }
    try {
      const registration = await registerUser(userName, email, hashedPassword);
      // JWT
      jwtToken(req, res, registration);

      res.status(200).json({ message: "New User Created Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrongs" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ message: errors.array() });
  }

  try {
    const user = await findUser(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const checkPassword = bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    //  JWT
    jwtToken(req, res, user);

    return res
      .status(200)
      .json({ message: "Login Successful", userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = (req: Request, res: Response) => {
  try {
    res.cookie("auth_token", "", {
      expires: new Date(0),
    });
    res.status(400).json({ message: "Logout Successful" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

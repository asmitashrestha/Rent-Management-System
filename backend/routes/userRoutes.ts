import express from "express";
const router = express.Router();

import { login, logout, register } from "../controllers/userController";
import {
  validateLogin,
  validateRegistration,
} from "../validators/userValidation";

router.post("/register", validateRegistration, register);
router.post("/login", validateLogin, login);
router.get("/logout", logout);

export default router;

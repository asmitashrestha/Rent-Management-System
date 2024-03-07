import { check } from "express-validator";

// Check each fields for validation
export const validateRegistration = [
  check("userName", "User Name is required").isString(),
  check("email", "Email is required").isEmail(),
  check("password", "Minimum 8 characters is required").isLength({ min: 8 }),
];

export const validateLogin = [
  check("email", "Email is required").isEmail(),
  check("password", "Minimum 8 characters is required").isLength({ min: 8 }),
];

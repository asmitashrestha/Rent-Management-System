import express from "express";
import {
  addCustomer,
  changeCustomer,
  fetchCustomer,
  fetchLatestCustomer,
  removeCustomer,
} from "../controllers/customerController";
const router = express.Router();

router.post("/:id", addCustomer);
// router.get("/:id", fetchCustomer);
router.get("/:id", fetchLatestCustomer);
router.put("/:id", changeCustomer);
router.delete("/:id", removeCustomer);

export default router;

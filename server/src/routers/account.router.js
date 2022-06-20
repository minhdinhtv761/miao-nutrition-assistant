import {
  createAccount,
  getAccountByEmail,
  updateAccount,
} from "../controllers/account.controller.js";

import express from "express";
import { getUserByAccountId } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id/user", getUserByAccountId);
router.post("/login", getAccountByEmail);
router.post("/register", createAccount);
router.patch("/:id", updateAccount);

export default router;

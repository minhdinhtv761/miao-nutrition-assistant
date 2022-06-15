import {
  createAccount,
  getAccountByEmail,
} from "../controllers/account.controller.js";

import express from "express";
import { getUserByAccountId } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", getAccountByEmail);
router.post("/register", createAccount);
router.get("/:id/user", getUserByAccountId);

export default router;

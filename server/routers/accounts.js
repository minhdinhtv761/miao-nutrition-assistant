import { createAccount, getAccountByEmail } from "../controllers/account.controller.js";

import express from "express";

const router = express.Router();

router.get("/login", getAccountByEmail);
router.post("/register", createAccount);

export default router;

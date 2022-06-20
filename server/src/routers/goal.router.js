import express from "express";
import { updateGoal } from "../controllers/goal.controller.js";

const router = express.Router();

router.patch("/user/:userId", updateGoal);

export default router;

import express from "express";
import { updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.patch("/:id", updateUser);

export default router;

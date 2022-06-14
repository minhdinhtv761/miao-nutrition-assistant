import express from "express";
import { getAllSampleFood } from "../controllers/sampleFood.controller.js";

const router = express.Router();

router.get("/", getAllSampleFood);

export default router;

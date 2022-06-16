import express from "express";
import { getAllSampleFoods } from "../controllers/sampleFood.controller.js";

const router = express.Router();

router.get("/", getAllSampleFoods);

export default router;

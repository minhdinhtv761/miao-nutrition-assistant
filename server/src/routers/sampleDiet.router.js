import express from "express";
import { getAllSampleDiet } from "../controllers/sampleDiet.controller.js";

const router = express.Router();

router.get("/", getAllSampleDiet);

export default router;

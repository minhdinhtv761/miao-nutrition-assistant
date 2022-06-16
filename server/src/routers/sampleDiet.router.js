import express from "express";
import { getAllSampleDiets } from "../controllers/sampleDiet.controller.js";

const router = express.Router();

router.get("/", getAllSampleDiets);

export default router;

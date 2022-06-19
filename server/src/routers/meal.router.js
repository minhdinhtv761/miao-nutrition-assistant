import express from "express";
import {
  createOneMealInDailyRecord,
  removeOneMealInDailyRecord,
  updateOneMealInDailyRecord,
} from "../controllers/meal.controller.js";

const router = express.Router();

router.patch("/daily-record/:dailyRecordId", createOneMealInDailyRecord);
router.patch(
  "/:mealId/daily-record/:dailyRecordId",
  updateOneMealInDailyRecord
);
router.delete(
  "/:mealId/daily-record/:dailyRecordId",
  removeOneMealInDailyRecord
);

export default router;

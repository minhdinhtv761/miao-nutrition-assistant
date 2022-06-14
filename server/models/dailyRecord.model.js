import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  recordDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  meals: {
    type: [
      {
        mealType: {
          type: String,
          enums: ["breakfast", "lunch", "dinner", "snack"],
          default: "breakfast",
        },
        time: {
          type: Date,
          default: new Date(),
        },
        mealDetails: {
          type: [
            {
              itemId: {
                type: Schema.Types.ObjectId,
                ref: "sample_foods",
                required: true,
              },
              servingSizeQuantity: {
                type: Number,
                default: 100,
              },
              energy: {
                type: Number,
              },
              carbohydrate: {
                type: Number,
              },
              fat: { type: Number },
              protein: { type: Number },
            },
          ],
        },
        energy: {
          type: Number,
        },
        carbohydrate: {
          type: Number,
        },
        fat: { type: Number },
        protein: { type: Number },
      },
    ],
  },
  energy: {
    type: Number,
  },
  carbohydrate: {
    type: Number,
  },
  fat: { type: Number },
  protein: { type: Number },
});
export const AccountModel = mongoose.model("dailyRecords", schema);

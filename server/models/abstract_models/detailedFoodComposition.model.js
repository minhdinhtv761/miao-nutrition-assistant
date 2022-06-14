import util from "util";
import { MainFoodCompositionSchema } from "./mainFoodComposition.model.js";

export function DetailedFoodCompositionSchema() {
  // call super
  MainFoodCompositionSchema.apply(this, arguments);
  // add
  this.add({
    water: {
      type: Number,
      default: null,
      min: 0,
      set: (w) => Math.round(w * 10) / 10,
      get: (w) => Math.round(w * 10) / 10,
    },
    fiber: {
      type: Number,
      default: null,
      min: 0,
      set: (f) => Math.round(f * 10) / 10,
      get: (f) => Math.round(f * 10) / 10,
    },
    sugar: {
      type: Number,
      default: null,
      min: 0,
      set: (s) => Math.round(s * 10) / 10,
      get: (s) => Math.round(s * 10) / 10,
    },
    saturatedFattyAcid: {
      type: Number,
      default: null,
      min: 0,
      set: (s) => Math.round(s * 1000) / 1000,
      get: (s) => Math.round(s * 1000) / 1000,
    },
    cholesterol: {
      type: Number,
      default: null,
      min: 0,
      set: (c) => Math.round(c),
      get: (c) => Math.round(c),
    },
    vitaminC: {
      type: Number,
      default: null,
      min: 0,
      set: (v) => Math.round(v),
      get: (v) => Math.round(v),
    },
    vitaminA: {
      type: Number,
      default: null,
      min: 0,
      set: (v) => Math.round(v),
      get: (v) => Math.round(v),
    },
    calcium: {
      type: Number,
      default: null,
      min: 0,
      set: (c) => Math.round(c),
      get: (c) => Math.round(c),
    },
    iron: {
      type: Number,
      default: null,
      min: 0,
      set: (i) => Math.round(i * 100) / 100,
      get: (i) => Math.round(i * 100) / 100,
    },
    potassium: {
      type: Number,
      default: null,
      min: 0,
      set: (p) => Math.round(p),
      get: (p) => Math.round(p),
    },
    sodium: {
      type: Number,
      default: null,
      min: 0,
      set: (s) => Math.round(s),
      get: (s) => Math.round(s),
    },
  });
}

util.inherits(DetailedFoodCompositionSchema, MainFoodCompositionSchema);

export const getStrokeDashoffset = (circumference, percentage) => {
  var maxPercent = percentage > 100 ? percentage - 100 : percentage;
  return circumference - (circumference * maxPercent) / 100;
};

export const getStrokeWidth = (radius) => radius / 4;

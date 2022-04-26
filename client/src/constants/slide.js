const gender = [
  {
    value: 0,
    title: "Nam",
  },
  {
    value: 1,
    title: "Nữ",
  },
];

const goal = [
  {
    value: 0,
    title: "Giảm cân",
  },
  {
    value: 1,
    title: "Giữ cân",
  },
  {
    value: 2,
    title: "Tăng cân",
  },
];

class Slide {
  constructor(id, title, type, body) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.body = body;
  }
}

export const slide = [
  new Slide(0, "Giới tính của bạn", "radio", gender),
  new Slide(1, "Mục tiêu cân nặng", "radio", goal),
];

// Whole-script strict mode syntax
"use strict";

class Point {
  constructor(name, x, y, visConfig) {
    this.name = name,
    this.x = x,
    this.y = y,
    this.visConfig = visConfig;
  }
}

var Points = {

  mainPoint: new Point("main", .1, .1, {
    visibleRadius: 5,
    restingColor: "black",
    selectedColor: "blue",
  }),

  anchors: [
    new Point("Anchor1", 0, 0, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
    new Point("Anchor2", 1, 0, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
    new Point("Anchor3", .5, Math.sqrt(3) / 2, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
  ]
};

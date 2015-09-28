// Whole-script strict mode syntax
"use strict";

class Point {
  constructor(name, x, y, visConfig) {
    this.name = name,
    this.x = x,
    this.y = y,
    this.visConfig = visConfig;
  }

  // This is the node responsible for displaying coords for this point.
  setCoordDisplayNode(node) {
    this.coordDisplayNode = node;
  }

  displayCoords() {
    this.coordDisplayNode.text("(" + this.x + "," + this.y + ")");
    // this.coordDisplayNode.text("(" + pointHouse.xScale.invert(this.x)
    //   + "," + pointHouse.yScale.invert(this.y) + ")");
  }
}

var Points = {

  mainPoint: new Point("main", .1, .1, {
    visibleRadius: 5,
    restingColor: "black",
    selectedColor: "blue",
  }),

  otherPoints: [
    new Point("1", 0, 0, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
    new Point("2", 1, 0, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
    new Point("3", .5, Math.sqrt(3) / 2, {
      visibleRadius: 5,
      restingColor: "green",
      selectedColor: "blue",
    }),
  ]
};

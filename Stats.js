// Responsible for the calculation/display of distance info on RHS.

Stats = {

  distance(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) +
      Math.pow(point1.y - point2.y, 2));
  },

  getSummedWeight() {
      var sum = 0;
      Points.otherPoints.forEach(
        point => {
            sum += this.distance(Points.mainPoint, point);
        }
      );
      return sum;
  },

  displayWeight() {
    d3.selectAll("#weights")
      .text(this.getSummedWeight());
  }
}

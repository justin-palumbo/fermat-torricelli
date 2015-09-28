// Responsible constructing for the panel that contains all the points we
// care about.

pointHouse = {
  w: 400,
  h: 400,
  padding: 25,
  minX: -.1,
  maxX: 1.1,
  minY: -.1,
  maxY: 1.1,

  buildContainer() {
    // var svg = d3.select("body")
    svg = d3.select("#points")
      .append("svg")
      .attr("width", this.w)
      .attr("height", this.h);

    this.xScale = d3.scale.linear()
      .domain([this.minX, this.maxX])
      .range([0, this.w]);

    var xAxis = d3.svg.axis()
      .orient("bottom")
      .scale(this.xScale);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (this.h - this.padding) + ")")
      .call(xAxis);

    this.yScale = d3.scale.linear()
      .domain([this.minY, this.maxY])
      .range([this.h, 0]);

    var yAxis = d3.svg.axis()
      .orient("left")
      .scale(this.yScale);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+this.padding+",0)")
      .call(yAxis);

    return svg;
  }
}

Behaviors = {

  pointDrag: d3.behavior.drag()
    .on('dragstart', function(d) {
      this.setAttribute('fill', d.visConfig.selectedColor);
    }).on('drag', function(point) {
      var displayX = d3.event.x;
      var displayY = d3.event.y;
      point.x = pointHouse.xScale.invert(displayX);
      point.y = pointHouse.yScale.invert(displayY);
      pointHouse.update();
      point.displayCoords();
			Stats.displayWeight();
    }).on('dragend', function(d) {
      this.setAttribute('fill', d.visConfig.restingColor);
    })
}

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import d3Tip from 'd3-tip';

class ScatterPlot {
  constructor(el, options) {
    this.el = el;

    if (options) {
      this.data = options.data || [];
      this.tooltip = options.tooltip;
      this.pointClass = options.pointClass || '';

      this.render(options.width || 960);
    }
  }

  render(width) {
    let margin = { top: 20, right: 20, bottom: 50, left: 60 };
    let height = 500 - margin.top - margin.bottom;
    width = width - margin.right - margin.left;
    let data = this.data

    let x = d3Scale.scaleTime()
      .domain([d3.min(data, d => {
        return Date.parse(d.created_at)
      }), d3.max(data, d => {
        return Date.parse(d.created_at)
      })])
      .range([0, width]);

    let y = d3Scale.scaleTime()
      .domain([new Date().setHours(0, 0, 0, 0), new Date().setHours(23, 59, 59, 999)])
      .nice(d3.timeDay)
      .range([height, 0]);

    this.chart = d3.select(this.el)
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);

    let main = this.chart.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main');

    let xAxis = d3Axis.axisBottom(x).tickFormat(d3.timeFormat('%b-%y'));

    main.append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('class', 'main axis date')
      .call(xAxis);

    // text label for the x axis
    this.chart.append("text")
      .attr("transform",
            "translate(" + ((width/2) + margin.left) + " ," +
                          (height + margin.top + 50) + ")")
      .style('text-anchor', 'middle')
      .text("Date Of Tweet");

    let yAxis = d3Axis.axisLeft(y).ticks(24).tickFormat(d3.timeFormat('%H:%M'));

    main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

    // text label for the y axis
    this.chart.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -20)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style('text-anchor', 'middle')
      .text("Time of Tweet - CST (-6)");

    let circles = main.append('g').attr('class', 'scatter-points');let chartBody = main.append('g');

    data.forEach(item => {
      circles.append('svg:circle')
      .attr('class', this.pointClass)
      .attr('cx', d => {
        return x(Date.parse(item.created_at));
      })
      .transition()
      .duration(Math.floor(Math.random() * (3000-2000) + 1000))
      .ease(d3.easeBounce)
      .attr('cy', d => {
         let today = new Date();
         let time = new Date(item.created_at);
         return y(today.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
      })
      .attr('r', 5);
    });

    if (this.tooltip) this._createTooltip(data);
  }

  _createTooltip(data) {
    let tip = d3Tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(d => {
      let createdAt = new Date(d.created_at);
      return this.tooltip(d);
    });

    // create tooltips
    this.chart.call(tip);

    this.chart
      .selectAll('circle')
      .data(data)
      .on('mouseover', function(d) {
        tip.attr('class', 'd3-tip animate').show(d, this);
      })
      .on('mouseout', function(d) {
        tip.attr('class', 'd3-tip').show(d, this);
        tip.hide();
      });
  }
}

export default ScatterPlot;

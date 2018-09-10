import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import d3Tip from 'd3-tip';

d3.tip = d3Tip;

class BarChart {
  constructor(el, options) {
    this.el = el;

    if (options) {
      this.data = options.data || [];
      this.xAxis = options.xAxis;
      this.yAxis = options.yAxis;
      this.tooltip = options.tooltip;

      this.render(options.width || 960);
    }
  }

  render(width) {
    let margin = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 40
    };

    let height = 500;
    let data = this.data;

    let x = d3Scale.scaleBand().rangeRound([0, width - margin.right - margin.left])
      .padding(0.1)
      .domain(data.map(d => {
        return d[this.xAxis]
      }));

    let y = d3Scale
      .scaleLinear()
      .range([height, 0])
      .domain([
        0,
        d3.max(data, d => {
          return d[this.yAxis];
        })
      ]);

      let xAxis = d3Axis.axisBottom(x);
      let yAxis = d3Axis.axisLeft(y);

      let chart = d3
        .select(this.el)
        .attr('width', '100%')
        .attr('height', height)
        .append('g').attr('transform', (d, i) => {
          return `translate(${margin.left}, ${margin.top})`;
        });

      // create x axis
      chart
        .append('g').attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
        .selectAll('text')
        .attr('class', 'label')
        .attr('y', 10)
        .attr('x', 10)
        .attr('dy', '.35em')
        .attr('transform', 'rotate(45)')
        .style('text-anchor', 'start');

      // create y axis
      chart
        .append('g')
        .attr('class', 'y axis')
        .call(yAxis);

      // create bars
      let bars = chart.selectAll('.bar')
        .data(data.reverse())
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', x.bandwidth())
        .attr("transform", function(d,i) {
          return "translate(" + [x(d.screen_name), y(d.occurences)] + ")"
        });

      // add transitions
      bars
        .transition()
        .duration(1000)
        .ease(d3.easeLinear)
          .attr('height', d => {
            return height - y(d.occurences);
          });

      if (this.tooltip) this._createTooltip(chart, bars);
  }

  _createTooltip(chart, bars) {
    let tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(d => {
      return this.tooltip(d);
    });

    // create tooltips
    chart.call(tip);

    // add tooltip
    bars
    .on('mouseover', function(d) {
      tip.attr('class', 'd3-tip animate').show(d, this);
    })
    .on('mouseout', function(d) {
      tip.attr('class', 'd3-tip').show(d, this);
      tip.hide();
    });
  }
}

export default BarChart;

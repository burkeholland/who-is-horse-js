import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import d3Tip from 'd3-tip';
import * as moment from 'moment';

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
    let margin = { top: 20, right: 15, bottom: 60, left: 60 };
    let height = 500;
    width = width - margin.right - margin.left;
    let data = this.data

    let x = d3Scale.scaleTime()
      .domain([d3.min(data, d => {
        return new Date(moment(d.created_at).format('MM-DD-YYYY'));
      }), d3.max(data, d => {
        return new Date(moment(d.created_at).format('MM-DD-YYYY'));
      })])
      .range([0, width]);

    let y = d3Scale.scaleTime()
      .domain([new Date().setHours(0, 0, 0, 0), new Date().setHours(23, 59, 59, 999)])
      .nice(d3.timeDay)
      .range([height, 0]);

    let chart = d3.select(this.el)
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);

    let main = chart.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main');

    let xAxis = d3Axis.axisBottom(x).tickFormat(d3.timeFormat('%b-%y'));

    main.append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('class', 'main axis date')
      .call(xAxis);

    let yAxis = d3Axis.axisLeft(y).ticks(24).tickFormat(d3.timeFormat('%H:%M'));

    main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

    let circles = main.append('g')
      .selectAll('scatter-dots')
      .data(data)
      .enter().append('svg:circle')
      .attr('class', this.pointClass)
      .attr('cx', d => {
        return x(new Date(d.created_at));
      })
      .attr('cy', height);

    circles.
      transition()
      .duration(1000)
      .ease(d3.easeLinear)
      .attr('cy', d => {
        let today = new Date();
        let time = new Date(d.created_at);
        return y(today.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
      })
      .attr('r', 10);

    if (this.tooltip) this._createTooltip(chart, circles);
  }

  _createTooltip(chart, circles) {
    let tip = d3Tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(d => {
      let createdAt = new Date(d.created_at);
      return this.tooltip(d);
    });

    // create tooltips
    chart.call(tip);

    circles.on('mouseover', function(d) {
      tip.attr('class', 'd3-tip animate').show(d, this);
    })
    .on('mouseout', function(d) {
      tip.attr('class', 'd3-tip').show(d, this);
      tip.hide();
    });
  }
}

export default ScatterPlot;

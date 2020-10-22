import React from 'react';
import * as d3 from 'd3';
import Utils from '../../common/utils/Utils';


class StackChart extends React.Component {

  componentDidMount() {
    const { width, height, data } = this.props;
    const svg = d3.select(this.refs.anchor);


    const createObjectsWithNameProperty = data.map(item => {
      return item.data.map(item1 => {
        const obj = {};
        obj.name = item.cell_name;
        return Object.assign({}, item1, obj);
      });
    });


    const flattenedDataArray = createObjectsWithNameProperty.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

    const groupByDescription = Utils.GroupByCategory(flattenedDataArray, 'description');

    const objKeys = Object.keys(groupByDescription).map(key => { return key; });



    const stack = d3.stack()
      .keys(objKeys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);


    const createDataInCorrectFormatForTheGraphs = createObjectsWithNameProperty.map(item => {
      return item.reduce((acc, curr) => {
        const key = curr['description'];
        acc[key] = curr.count;
        acc['cell_name'] = curr.name;
        return acc;
      }, {});
    });

    const series = (stack(createDataInCorrectFormatForTheGraphs));



    const x = d3.scaleBand()
      .domain(data.map(function (d) { return d.cell_name; }))
      .range([0, width])
      .padding(0.2)
      .align(0.2);


    const y = d3.scaleLinear()
      .domain([0, d3.max(series[series.length - 1], function (d) { return d[1]; })])
      .range([height, 20]);

    const colors = d3.scaleOrdinal(d3.schemeSet3);


    // // Define and draw axes
    const yAxis = d3.axisLeft()
      .ticks(5)
      .scale(y);

    const xAxis = d3.axisBottom()
      .scale(x)
      .ticks(2)
      ;

    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(60,0)')
      .call(yAxis);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(60,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', function (d) {
        return 'rotate(-65)';
      });

    const groups = svg.selectAll('g.cost')
      .data(series)
      .enter().append('g')
      .attr('class', 'cost')
      .attr('fill', function (d, i) { return colors(i); })
      .attr('transform', 'translate(60,0)');

    const rect = groups.selectAll('rect')
      .data(function (d) { return d; })
      .enter()
      .append('rect')
      .attr('x', function (d) { return (x(d.data.cell_name)); })
      .attr('y', function (d) { return (y(d[1])); })
      .attr('height', function (d) { return (y(d[0])) - (y(d[1])); })
      .attr('width', x.bandwidth())
      .on('mouseover', function () { tooltip.style('display', 'block'); })
      .on('mouseout', function () { tooltip.style('display', 'none'); })
      .on('mousemove', function (d) {
        const xPosition = d3.mouse(this)[0] - 15;
        const yPosition = d3.mouse(this)[1] - 25;
        tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');

        tooltip.select('text').text(d[1]);
      });

    console.log(rect);

    // Draw legend
    const legend = svg.selectAll('.legend')
      .data(series)
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) { return 'translate(60,' + i * 19 + ')'; });

    legend.append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', function (d, i) { return colors(i); });

    legend.append('text')
      .attr('x', width + 5)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'start')
      .text(function (d, i) {
        switch (i) {
          case i: return series[i].key;

          default: return ('hi');
        }
      });


    // Prep the tooltip bits, initial display is hidden
    const tooltip = svg.append('g')
      .attr('class', 'tooltip')
      .style('display', 'none');

    tooltip.append('rect')
      .attr('width', 30)
      .attr('height', 20)
      .attr('fill', 'white')
      .style('opacity', 0.5);

    tooltip.append('text')
      .attr('x', 15)
      .attr('dy', '1.2em')
      .style('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold');

  }


  render() {
    return (
      <g ref='anchor'></g>

    );
  }
}

export default StackChart;

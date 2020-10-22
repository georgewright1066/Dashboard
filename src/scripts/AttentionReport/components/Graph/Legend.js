import React from 'react';
import {select} from 'd3-selection';

class Legend extends React.Component {

  componentDidMount() {
    const {fill, data} = this.props;
    let svgLegend = select('#legend');

    if(data) {

      const names= data.map(item => item.stim_name);

      svgLegend.append('g')
        .selectAll('text')
        .data(names)
        .enter()
        .append('text')
        .attr('font-size', '10px')
        .attr('font-family', 'HelveticaNeue-Light, Helvetica, sans-serif')
        .attr('x', 350)
        .attr('y', function(d, i){ return 20 + (15 * i); })
        .text(function(d){ return d; });

      svgLegend.append('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', 340)
        .attr('cy', function(d, i){ return 16 + (15 * i); })
        .attr('r', 6)
        .attr('fill', function(d,i){return fill(i);});
    }

  }

  render() {


    return (
      <svg id='legend'></svg>
    );
  }
}

export default Legend;


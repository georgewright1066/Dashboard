import React from 'react';
import {select} from 'd3-selection';

class Legend extends React.Component {

  componentDidMount() {
    const {fill, data, width, names} = this.props;
    let svgLegend = select('.legend');

    if(data) {

      svgLegend.append('g')
        .selectAll('text')
        .data(names)
        .enter()
        .append('text')
        .attr('font-size', '10px')
        .attr('font-family', 'HelveticaNeue-Light, Helvetica, sans-serif')
        .attr('x', width /2 + 160)
        // .attr('transform', function(d) { return 'translate(-200,100)'; })
        .attr('y', function(d, i){ return 20 + (15 * i); })
        .text(function(d){ return d; });


      svgLegend.append('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', width/2 + 150)
        .attr('cy', function(d, i){ return 16 + (15 * i); })
        .attr('r', 6)
        .attr('fill', function(d,i){return fill(i);});
    }

  }

  componentDidUpdate() {
    const {fill, width, names} = this.props;

    select('#legend')
      .selectAll('circle')
      .attr('cx', width/2 + 150)
      .attr('cy', function(d, i){ return 16 + (15 * i); })
      .attr('r', 6)
      .attr('fill', function(d,i){return fill(i);});

    select('.legend')
      .selectAll('text')
      .data(names)
      .attr('x', width /2 + 160)
      .attr('y', function(d, i){ return 20 + (15 * i); })
      .text(function(d){ return d; });
  }


  render() {


    return (
      <svg className='legend'></svg>
    );
  }
}

export default Legend;


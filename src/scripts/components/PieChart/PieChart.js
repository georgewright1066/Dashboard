import React, { Component } from 'react';
import {pie} from 'd3-shape';
import {scaleOrdinal} from 'd3-scale';
import {schemeCategory10} from 'd3-scale-chromatic';
import  Pie  from './Pie';
import Responsive from './Responsive';
import Legend from './Legend';



class Piechart extends Component {
  constructor() {
    super();
    this.pie = pie()
      .value((d) => d.value);
    this.colors = scaleOrdinal(schemeCategory10);
  }

  render() {
    const {data , names} = this.props;
    if (!data) {
      return <div>Loading...</div>;
    }

    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 2;
    // Centers the pie chart
    let x = width / 2;
    let y = height / 2;
    return (
      <svg width="100%" height="370"  >
        <Pie x={x} y={y}
          width={width}
          radius={radius}
          data={this.props.data.map(item => item.count)} />
        <Legend width={x} height={y} data={this.props.data} names={names} fill={this.colors} />
      </svg>

    );
  }
}

export default Responsive(Piechart);

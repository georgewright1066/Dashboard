import React from 'react';
import {arc} from 'd3-shape';

class Slice extends React.Component {
  constructor(props) {
    super(props);
    let {innerRadius = 0, outerRadius} = this.props;

    this.arc = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
  }
  render() {
    let {value, fill, label, innerRadius = 0, outerRadius} = this.props;
    this.arc
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    return (
      <g>
        <path d={this.arc(value)} fill={fill} />
        <text transform={`translate(${this.arc.centroid(value)})`}
          dy=".35em"
          textAnchor="middle"
          fill="white">
          {label}
        </text>
      </g>
    );
  }
}

export default Slice;




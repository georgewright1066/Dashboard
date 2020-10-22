import React from 'react';
import {pie} from 'd3-shape';
import {scaleOrdinal} from 'd3-scale';
import {schemeCategory10} from 'd3-scale-chromatic';
import Slice from './Slice';



class Pie extends React.Component {
  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.colorScale  = scaleOrdinal(schemeCategory10);
    // console.log(pie());
    this.pie = pie();
    this.renderSlice = this.renderSlice.bind(this);
  }


  render() {
    let {x, y, data} = this.props;
    // https://github.com/d3/d3/wiki/Pie-Layout


    return (
      <g className="a" transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
        {this.pie(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    // We'll create this component in a minute
    return (
      <Slice key={i}
        outerRadius={this.props.radius}
        value={value}
        label={value.data}
        fill={this.colorScale(i)} />
    );
  }
}

export default Pie;

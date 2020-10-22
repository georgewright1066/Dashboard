import React from 'react';
import {select} from 'd3-selection';
import { axisLeft } from 'd3-axis';

class YAxis extends React.Component {
  constructor() {
    super();
    this.renderAxis = this.renderAxis.bind(this);

  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    let node = this.node;
    let axis = axisLeft()
      .ticks(5)
      .scale(this.props.scale);
    select(node).call(axis);
  }

  render() {
    return[
      <text key={'axis-label'} transform="rotate(-90)" y="20" x="-120" dy="1em" fontSize="12px" fontFamily="HelveticaNeue-Bold, Helvetica, sans-serif">People</text>,
      <g key="axis"  ref={node => this.node = node} transform={`translate(${this.props.marginSide}, ${this.props.marginTop})`}></g>
    ]; }
}

export default YAxis;


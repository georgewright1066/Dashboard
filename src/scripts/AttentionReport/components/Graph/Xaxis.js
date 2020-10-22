import React from 'react';
import {select} from 'd3-selection';
import { axisBottom} from 'd3-axis';


export default class XAxis extends React.Component {
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
    let axis = axisBottom()
      .ticks(5)
      .scale(this.props.scale);
    select(node).call(axis);
  }

  render() {
    const {width , height, marginSide} = this.props;
    return[
      <text key={'axis-label'} transform="rotate(-360)"   y={height + marginSide - 20} x={width / 2 - marginSide} dy="1em" fontSize="12px" fontFamily="HelveticaNeue-Bold, Helvetica, sans-serif">Dwell Time</text>,
      <g key={'axis-x'}  ref={node => this.node = node} transform={`translate(${marginSide}, ${height})`}></g>];
  }
}

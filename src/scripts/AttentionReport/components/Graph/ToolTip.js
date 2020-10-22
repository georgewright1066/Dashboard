import React from 'react';

const ToolTip = ({ data}) => (
  <g   style={{opacity: 0.0}}>
    <rect width = {120} height = {40} fill = {'white'} stroke="black" strokeOpacity="0.8" />
    <text fontSize="10px" x="0" y="0" padding="5px">
      <tspan x="6"  dy="1.2em">People: {data.x}</tspan>
      <tspan x="6" dy="1.2em">Dwell time: {data.y}ms</tspan>
    </text>
  </g>
);

export default ToolTip;

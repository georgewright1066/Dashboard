import React from 'react';
import {line} from 'd3-shape';

let Line = (props) => {

  let { data, xScale, yScale, fill } = props;
  let linePath = line()
    .x((d) => {
      return xScale(d.y);
    })
    .y((d) => {
      return yScale(d.x);
    });

  return (
    <path
      d={linePath(data)}
      fill={'none'}
      stroke={fill}
    />
  );
};

export default Line;

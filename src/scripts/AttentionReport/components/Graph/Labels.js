import React from 'react';

let Labels = (props) => {

  let { data, xScale, yScale,  onMouseOver, fill} = props;
  return data.map((series, key) => {
    let xPoint = xScale(series.y);
    let yPoint = yScale(series.x);
    return (
      <circle
        className="labels"
        cx = {xPoint}
        cy = {yPoint}
        r = {3}
        fill = {fill}
        key={key}
        onMouseOver={() => onMouseOver(series)}

      />
    );
  });
};

export default Labels;

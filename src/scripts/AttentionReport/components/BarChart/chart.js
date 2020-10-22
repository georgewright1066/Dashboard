import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import data from './Dataa';
import Axes from './Axes';
import Bars from './Bars';
import Responsive from './Responsive';
import Tooltip from './Tooltip';


class Chart extends Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
    this.state = {
      hoveredBar: null
    };
  }

  render() {
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    };
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    // const svgDimensions = { width: 800,  height:300 };

    const maxValue = Math.max(...data.map(d => d.value));

    const xScale = this.xScale
      .padding(0.5)
      .domain(data.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right]);

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return(
      <div>
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={data}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            onMouseOverCallback={datum => this.setState({hoveredBar: datum})}
            onMouseOutCallback={datum => this.setState({hoveredBar: null})}
          />
          <Axes
            scales={{xScale, yScale}}
            margins={margins}
            svgDimensions={svgDimensions}
          />
        </svg>
        { this.state.hoveredBar ?
          <Tooltip
            hoveredBar={this.state.hoveredBar}
            scales={{ xScale, yScale }}
          /> :
          null}
      </div>


    );
  }
}

export default Responsive(Chart);

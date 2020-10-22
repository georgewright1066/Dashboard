import React from 'react';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import DataSeries from './DataSeries';
import XAxis from './Xaxis';
import YAxis from './Yaxis';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Legend from './Legend';
import Responsive from '../../../common/shared/Responsive';


class LineChart extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      hoveredBar: null,
      series: ''
    };
    // this.setWidth = this.setWidth.bind(this);

  }

  // setWidth() {
  //   const node = this.node;
  //   const w = node.parentNode.offsetWidth;
  //   if (w !== this.state.width) {
  //     this.setState({
  //       width: w
  //     });
  //   }

  // }

  // componentDidMount() {
  //   window.addEventListener('resize', this.setWidth);
  //   this.setWidth();
  // }




  render() {
    const width = 550;
    const height = width / 3;
    const marginTop = width / 20;
    const marginSide = width / 10;

    const xScale = scaleLinear()
      .domain([this.props.xMin, this.props.xMax])
      .range([0, width - (marginSide * 2)]);

    const yScale = scaleLinear()
      .domain([this.props.yMin, this.props.yMax])
      .range([height - marginTop, 0]);

    const colors = scaleOrdinal(schemeCategory10)
      .domain([this.props.data]);


    return (
      <div className="line-chart">
        <svg ref={node => this.node = node} viewBox={`0, 0, ${width}, ${height}`} width={width} height={height + marginTop * 4} className="line-chart">
          {this.props.data.map((item, key) =>
            <DataSeries
              xScale={xScale}
              yScale={yScale}
              data={item.graph_data}
              width={width - marginSide}
              height={height - marginTop}
              marginTop={marginTop}
              marginSide={marginSide}
              key={key}
              fill={colors(key)}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
            />
          )}

          <Legend
            data={this.props.data}
            fill={colors}
            width={width}
          />

          <XAxis
            scale={xScale}
            height={height}
            data={this.props.data}
            width={width}
            marginTop={marginTop}
            marginSide={marginSide}
          />
          <YAxis
            scale={yScale}
            height={height}
            data={this.props.data}
            width={width}
            marginTop={marginTop}
            marginSide={marginSide}
          />
        </svg>
      </div>
    );
  }
}

export default Responsive(LineChart);

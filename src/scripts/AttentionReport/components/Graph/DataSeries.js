import React from 'react';
import { select, mouse} from 'd3-selection';

import ToolTip from './ToolTip';
import Labels from './Labels';
import Line from './Line';
import Legend from './Legend';

class DataSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series:''
    };

  }

  componentDidMount() {
    let node = this.node;
    let tool = node.childNodes[0];

    select(node).on('mouseover', function() {
      let mousePosition = mouse(this);
      let transformBox = 'translate(' + (mousePosition[0] -20) + ',' + (mousePosition[1] - 60) + ')';
      tool.setAttribute('transform', transformBox);
      tool.setAttribute('style', 'opacity: 1.0');
    });
    select(node).on('mouseout', function() {
      tool.setAttribute('style', 'opacity: 0.0');
    });

  }

  onLabelClick = (series) => {
    this.setState({series})
  }

  render() {

    let { data, xScale, yScale, marginSide, marginTop, fill, legendData } = this.props;
    return (
      <g  ref={(node) => { this.node = node; }} transform={'translate(' + marginSide + ',' + marginTop + ')'}>
        <ToolTip
          data={this.state.series ? this.state.series : ''}
        />
          <Legend
          fill={fill}
          data={legendData}
         />


        <Line
          data={data}
          marginSide={marginSide}
          marginTop={marginTop}
          xScale={xScale}
          yScale={yScale}
          fill={fill}

        />

        <Labels
          data={data}
          marginSide={marginSide}
          marginTop={marginTop}
          xScale={xScale}
          yScale={yScale}
          onMouseOver={this.onLabelClick}
          fill={fill}
        />
      </g>
    );
  }

}

export default DataSeries;

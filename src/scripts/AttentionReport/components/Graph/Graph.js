import React from 'react';
import LineChart from './LineChart';
import {max, min} from 'd3-array';


export default class LineGraphContainer extends React.Component {

  render() {
    const { loading, graphData } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    const data = graphData.data.data;
    const minMaxValues =
     graphData.data.data.map(data => {
       return data.graph_data;
     })
       .map(item => {
         return item.map(ele => {
           const obj = {};
           obj['x'] = ele.y;
           obj['y'] = ele.x;
           return obj;
         });
       })
       .reduce(((pre, curr) => pre.concat(curr)), []);

    const maxX = max(minMaxValues, (data) => {
      return data.x;
    });
    const minX = min(minMaxValues, (data) => {
      return data.x;
    });

    const maxY = max(minMaxValues, (data) => {
      return data.y;
    });
    const minY = min(minMaxValues, (data) => {
      return data.y;
    });

    return (
      <LineChart
        data={data}
        xMin={minX}
        xMax={maxX}
        yMin={minY}
        yMax={maxY}/>
    );
  }
}

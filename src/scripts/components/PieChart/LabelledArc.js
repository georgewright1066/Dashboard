// ./src/components/Piechart/index.jsx
import React from 'react';
import { Arc } from './Arc';



class LabeledArc extends Arc {
  render() {
    // let [labelX, labelY] = this.arc.centroid(this.props.data),
    //   labelTranslate = `translate(${labelX}, ${labelY})`;

    return (
      <g>

      </g>
    );
  }
}

export { LabeledArc };

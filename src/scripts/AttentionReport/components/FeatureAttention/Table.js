import React, { Component } from 'react';
import Utils from '../../../common/utils/Utils';
import classNames from 'classnames';

// import PropTypes from 'prop-types';
// import FeatureAttentionTableCell from './FeatureAttentionTableCell';

class FeatureAttentionTable extends Component {

  render() {
    const { loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    const data = this.props.data;
    const list = this.props.data.feature_tag_list;
    const filter = this.props.filter;
    const filterSuffix = filter === 'panelist_viewed_percent' ? '%' : 's';
    return (
      <table className="table study">
        <tbody><tr>
          <td></td>
          {data.data.map((item, index) => {
            return (
              <td key={index} colSpan="2">{item.stim_name}</td>
            );
          })}

        </tr>
          <tr>
            <td></td>
            {data.data.map((item1, index) => {
              return ([
                <td key={2 + index + item1}>Feature</td>,
                <td key={1 + index + item1}>Norm</td>
              ]);
            })}
          </tr>

          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{Utils.Capitalize(item)}</td>
                {data.data.map((item1, index) => {
                  const isBetterThanNorm = item1.feature_data[item][filter] > item1.norm_data[item][filter];
                  const isEqual = parseInt(item1.feature_data[item][filter], 10) === parseInt(item1.norm_data[item][filter], 10);
                  const decimalPlace = filterSuffix === 's' ? 1 : 0;
                  return ([
                    <td className={classNames({ 'green': isBetterThanNorm }, { 'red': !isBetterThanNorm }, { 'none': isEqual })} key={1 + index + item1}>{Number(item1.feature_data[item][filter]).toFixed(decimalPlace).toLocaleString()}{filterSuffix}</td>,
                    <td key={2 + index + item1}>{Number(item1.norm_data[item][filter]).toFixed(decimalPlace).toLocaleString()}{filterSuffix}</td>

                  ]);
                })}
              </tr>
            );
          })}
        </tbody></table>
    );
  }
}

export default FeatureAttentionTable;

FeatureAttentionTable.propTypes = {
};


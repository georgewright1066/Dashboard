import React, { Component } from 'react';
import Utils from '../../../common/utils/Utils';
import classNames from 'classnames';

class AttentionTable extends Component {

  render() {
    const { loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }
    const data = this.props.data.data;

    const mySet = new Set();
    mySet.add("panelist_viewable_script_percent");
    mySet.add("avg_page_dwell_time");
    mySet.add("panelist_viewable_percent");
    mySet.add("avg_stim_viewable_time");
    mySet.add("panelist_viewed_percent");
    mySet.add("avg_stim_dwell_time");

    const mySetArray = Array.from(mySet);

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
                <td key={2 + index + item1}>Actual</td>,
                <td key={1 + index + item1}>Norm</td>
              ]);
            })}
          </tr>

          {mySetArray.map(key => {
            if (key === 'panelist_total_count' || key === 'panelist_viewed_count' || key === 'panelist_viewable_count') {
              return null;
            }
            return (
              <tr key={key}>

                <td>{Utils.Capitalize(key.split('_').join(' '))}</td>
                {data.data.map((item, index) => {
                  const isBetterThanNorm = item.stim_data[key] > item.norm_data[key];
                  const isEqual = parseInt(item.stim_data[key], 10) === parseInt(item.norm_data[key], 10);
                  const isTimeOrPercentage = key.split('_').pop().toUpperCase() === 'TIME';
                  const end = isTimeOrPercentage ? 's' : '%';
                  const decimalPlace = isTimeOrPercentage ? 1 : 0;
                  return ([
                    <td className={classNames({ 'green': isBetterThanNorm }, { 'red': !isBetterThanNorm }, { 'none': isEqual })} key={1 + item + index}>{Utils.DelimitNumbers(Number(item.stim_data[key]).toFixed(decimalPlace))}{end}</td>,
                    <td key={2 + item + index}>{Utils.DelimitNumbers(Number(item.norm_data[key]).toFixed(decimalPlace))}{end}</td>

                  ]);
                })}
              </tr>

            );
          })}




        </tbody></table>
    );
  }
}

export default AttentionTable;

AttentionTable.propTypes = {
};


import React from 'react';
import Utils from '../../common/utils/Utils';

const Table = ({ featureData }) => {
  return (
    <table className="table study">
      <tbody>
        <tr>
          <th>Feature </th>
          <th>Average feature dwell</th>
          <th>Average page dwell</th>
          <th>Percent panelist viewed</th>
        </tr>
        {featureData.feature_data.map((i, index) =>
          <tr key={index}>
            <td>{i.feature_name}</td>
            <td>{Utils.DelimitNumbers(Number(i.avg_feature_dwell_time).toFixed(1))}s</td>
            <td>{Utils.DelimitNumbers(Number(i.avg_page_dwell_time).toFixed(1))}s</td>
            <td>{Utils.DelimitNumbers(Number(i.participant_viewed_percent).toFixed(0))}%</td>
          </tr>)}
      </tbody>
    </table>
  );
};

export default Table;

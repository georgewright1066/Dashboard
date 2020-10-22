import React from 'react';
import TableHeadings from '../../Batches/components/TableHeader';
import Utils from '../../common/utils/Utils'

const Table = ({ headings, reportData, className }) => {
  return (
    <table className={`table study ${className}`} >
      <tbody>
        <TableHeadings data={headings} />
        <tr>
          <td>Avg time to first view</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.avg_time_to_first_view).toFixed(1))}s</td>
        </tr>
        <tr>
          <td>Panelist viewed over1 percent</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.panelist_viewed_over1_percent).toFixed(0))}%</td>
        </tr>

        <tr>
          <td>Attention per 1000 impressions</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.attention_per_1000_impressions).toFixed(1))}s</td>
        </tr>
      </tbody>
    </table>
  );
}


export default Table;


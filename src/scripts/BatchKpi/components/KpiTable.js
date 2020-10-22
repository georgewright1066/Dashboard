import React from 'react';
import TableHeadings from '../../Batches/components/TableHeader';
import Utils from '../../common/utils/Utils'

const Table = ({ headings, reportData, className }) => {
  return (
    <table className={`table study ${className}`} >
      <tbody>
        <TableHeadings data={headings} />
        <tr>
          <td>Avg page dwell time</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.avg_page_dwell_time).toFixed(1))}s</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.avg_page_dwell_time).toFixed(1))}s</td>

        </tr>
        <tr>
          <td>Panelist viewed percent</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.panelist_viewed_percent).toFixed(0))}%</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.panelist_viewed_percent).toFixed(0))}%</td>
        </tr>
        <tr>
          <td>Avg stim dwell time</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.avg_stim_dwell_time).toFixed(1))}s</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.avg_stim_dwell_time).toFixed(1))}s</td>
        </tr>
        <tr>
          <td>Panelist viewable script percent</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.panelist_viewable_script_percent).toFixed(0))}%</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.panelist_viewable_script_percent).toFixed(0))}%</td>
        </tr>
        <tr>
          <td>Panelist viewable percent</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.panelist_viewable_percent).toFixed(0))}%</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.panelist_viewable_percent).toFixed(0))}%</td>
        </tr>
        <tr>
          <td>Avg stim viewable time</td>
          <td>{Utils.DelimitNumbers(Number(reportData.stim_data.avg_stim_viewable_time).toFixed(1))}s</td>
          <td>{Utils.DelimitNumbers(Number(reportData.norm_data.avg_stim_viewable_time).toFixed(1))}s</td>
        </tr>

      </tbody>
    </table>
  );
}


export default Table;


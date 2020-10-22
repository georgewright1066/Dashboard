import React from 'react';
import Utils from '../../common/utils/Utils';
import TableHeadings from '../../Batches/components/TableHeader';

const Table = ({ headings, reportData, className }) => {
  return (
    <table className={`table study ${className}`} >
      <tbody>
        <TableHeadings data={headings} />
        {Object.keys(reportData.stim_data).map(key => {
          const isTimeOrPercentage = key.split('_').map(item => item.toUpperCase()).includes('TIME');
          const end = isTimeOrPercentage ? 's' : '%';
          const decimalPlace = isTimeOrPercentage ? 1 : 0;
          const isNorms = reportData['norm_data']
          return (
            <tr key={key}>
              <td>{Utils.Capitalize(key.split('_').join(' '))}</td>
              <td>{Utils.DelimitNumbers(Number(reportData['stim_data'][key]).toFixed(decimalPlace))}{end}</td>
              {isNorms ?
                <td>{Utils.DelimitNumbers(Number(reportData['norm_data'][key]).toFixed(decimalPlace))}{end}</td> :
                <td>N/A</td>
              }
            </tr>
          );

        })}
      </tbody>
    </table>
  );
}


export default Table;


import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import TableHeader from '../../Stims/components/TableHeader';
import { Link } from 'react-router-dom';

function batchDataTable({ batchData, loading, tableHeadings }) {
  if (loading) {
    return (<LoadingSpinner />)
  }

  return (
    <table className="stims table">
      <tbody>
        <TableHeader data={tableHeadings} />
        {batchData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name === '' || item.name === null ? 'TBD' : item.name}</td>
              <td className="link"><Link to={`/my_batches/batch_overview/${item.internal_batch_id}&${item.internal_vendor_id}`}>{item.batch_id}</Link></td>
              <td>{item.estimated_batch_size}</td>
              <td className="centered">{item.live ? '\u2713' : '\u2717'}</td>
              <td className="centered">{item.completed ? '\u2713' : '\u2717'}</td>
              <td>{item.data_collection_start}</td>
              <td>{item.data_collection_end}</td>
              <td>{item.report_generated_date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default batchDataTable;


batchDataTable.propTypes = {
  loading: PropTypes.bool,
  batchData: PropTypes.array

};

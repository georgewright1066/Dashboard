import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import Button from '../../common/components/Button';
import { Link } from 'react-router-dom';
import TableHeader from '../../Stims/components/TableHeader';
import Utils from '../../common/utils/Utils'

function BatchDataTable({ batchStims, batchStimsLoading, batchTableHeadings }) {

  return (
    <React.Fragment>
      {batchStimsLoading ? (
        <LoadingSpinner />
      ) : (

          <table className="stims table">
            <tbody>
              <TableHeader data={batchTableHeadings} />
              {batchStims.map((item, index) =>(
                  <tr key={index}>
                    <td>{item.identifier}</td>
                    <td>{item.name}</td>
                    <td>{Utils.Capitalize(item.type)}</td>
                    <td>{`${item.width} x ${item.height}`}</td>
                    <td>{item.discovered_date}</td>
                    <td className="centered"><Link to={`/batch_stim_list/aoi/${item.internal_stim_id}?type=batch`}>
                      <Button
                        text="AOI"
                        buttonClass="button-primary"
                      /></Link></td>
                  </tr>

              ))}
            </tbody>
          </table>
        )}
    </React.Fragment>
  );
}

export default BatchDataTable;


BatchDataTable.propTypes = {
  loading: PropTypes.bool,
  stims: PropTypes.array

};

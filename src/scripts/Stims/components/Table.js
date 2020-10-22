import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import Button from '../../common/components/Button';
import { Link } from 'react-router-dom';
import TableHeader from './TableHeader';

function StimsTable({ stims, loading, tableHeadings, onAscendingClick, onDecendingClick, sortType, currentSort }) {
  const activeTabElement = `${currentSort}-${sortType.toLowerCase()}`

  if (loading) {
    return (<LoadingSpinner />)
  }
  return (
    <table className="stims table">
      <tbody>
        <TableHeader activeTabElement={activeTabElement} data={tableHeadings} onAscendingClick={onAscendingClick} onDecendingClick={onDecendingClick} />
        {stims.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.media}</td>
              <td>{item.brand}</td>
              <td>{item.width}</td>
              <td>{item.height}</td>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td className="links__table-headings">
                <Link to={`/stims/aoi/${item.id}?type=stim`}><Button buttonClass="button-primary" text="AOI" /></Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default StimsTable;


StimsTable.propTypes = {
  loading: PropTypes.bool,
  stims: PropTypes.array

};

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableCell = ({ id, onClick, title, environment, media, live, completed, cells, participants_requested, participants_returned, data_collection_end, data_collection_start }) => (
  <tr>
    <td> <Link onClick={onClick} to={`/my_studies/overview/${id}`}>{title}</Link></td>
    <td>{environment}</td>
    <td>{media}</td>
    <td>{live ? '\u2713' : '\u2717'}  </td>
    <td>{completed ? '\u2713' : '\u2717'}</td>
    <td>{cells}</td>
    <td>{participants_requested.toString()}</td>
    <td>{participants_returned}</td>
    <td>{data_collection_end}</td>
    <td>{data_collection_start}</td>
  </tr>
);

export default TableCell;

TableCell.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  environment: PropTypes.string,
  media: PropTypes.string,
  live: PropTypes.bool,
  completed: PropTypes.bool,
  cells: PropTypes.number,
  participants_requested: PropTypes.number,
  participants_returned: PropTypes.number,
  data_collection_end: PropTypes.string,
  data_collection_start: PropTypes.string,
  onClick: PropTypes.func
};

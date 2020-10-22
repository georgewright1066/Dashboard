import React from 'react';
// import PropTypes from 'prop-types';

const TableHeaders = ({item, index }) => {
  return ([
    <td key={index + item}>Norm</td>,
    <td key={index + item}>Feature</td>
  ]);
};

export default TableHeaders;


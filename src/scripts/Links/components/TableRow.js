import React from 'react';

function TableRow({ data }) {

  return (
    <tr>
      {data.map((item, index) => <th key={index}>{item}</th>)}
    </tr>
  );
}

export default TableRow;


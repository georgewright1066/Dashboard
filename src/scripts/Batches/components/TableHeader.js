import React from 'react';

function TableHeader({ data }) {

  return (
    <tr>
      {data.map((item, index) => <th key={index}>{item}</th>)}
    </tr>
  );
}

export default TableHeader;


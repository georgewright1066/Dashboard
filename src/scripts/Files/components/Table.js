import React from 'react';
import PropTypes from 'prop-types';

function Table({ files }) {

  return (
    <table className="stims table">
      <tbody>
        <tr>
          <th>Study Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>URL</th>


        </tr>
        {files.map((item, index) => {

          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td><a rel="noopener noreferrer" target="_blank" href={item.url}>Link</a></td>

            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;


Table.propTypes = {
  files: PropTypes.array

};

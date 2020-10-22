

import React from 'react';
import Button from '../../common/components/Button';
import LoadingSpinner from '../../common/components/LoadingSpinner';
class Table extends React.Component {
  render() {
    const { loading, cachePage, onClick } = this.props;

    if (loading) {
      return <LoadingSpinner />;
    }
    return (
      <table className="table study cache-page">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Original Page</th>
            <th>Cache Page</th>
            <th>Add</th>
          </tr>
          {cachePage.map((item, index) => {
            return (
              <tr key={index}>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td><a href={item.original_source}>Original Link</a></td>
                <td><a href={item.cached_source}>Cached Link</a></td>
                <td ><Button handleClick={() => onClick(item.id)} buttonClass="button-primary" text="Add" /></td>

              </tr>);
          })}


        </tbody>
      </table>
    );
  }
}

export default Table;

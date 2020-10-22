

import React from 'react';
import Button from '../../common/components/Button';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../common/components/LoadingSpinner'

class Table extends React.Component {

  render() {
    const { loading, data, onClick } = this.props;

    if (loading) {
      return <LoadingSpinner />
    }
    return (
      <table className="table study">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Adtype</th>
            <th>Media</th>
            <th>Dimension</th>
            <th>Add</th>

          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td >{item.id}</td>
                <td >{item.name}</td>
                <td >{item.type}</td>
                <td >{item.adtype}</td>
                <td >{item.media}</td>
                <td >{`${item.width} x ${item.height}`}</td>
                <td ><Button handleClick={() => onClick(item.id)} buttonClass="button-primary" text="Add" /></td>
              </tr>);

          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
Table.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  onClick: PropTypes.func

};
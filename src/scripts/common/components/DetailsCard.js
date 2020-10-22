import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsCard extends Component {
  render() {
    const {studyName, type, identifier} = this.props;
    return (
      <div className="details-card card">

        <div className="details-card__item-container">
          <h2>Name:</h2>
          <h2>{studyName}</h2>
        </div>
        <div className="details-card__item-container">
          <h2>Type:</h2>
          <h2>{type}</h2>
        </div>
        {identifier ?
          <div className="details-card__item-container">
          <h2>Identifier</h2>
          <h2>{identifier}</h2>
            </div>
            : null}
      </div>
    );
  }
}

DetailsCard.propTypes = {
  studyName: PropTypes.string,
  type: PropTypes.string,
};


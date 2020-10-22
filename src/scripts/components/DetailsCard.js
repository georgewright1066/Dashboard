import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsCard extends Component {
  render() {
    const {studyName, type} = this.props;
    return (
      <div className="details-card card">
        <div className="details-card__item-container">
          <h2>Name:</h2>
        </div>
        <div className="details-card__item-container">
          <h2>{studyName}</h2>
        </div>
        <div className="details-card__item-container">
          <h2>Type:</h2>
        </div>
        <div className="details-card__item-container">
          <h2>{type}</h2>
        </div>
      </div>
    );
  }
}

DetailsCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};


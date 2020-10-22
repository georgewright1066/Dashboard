import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__title">{this.props.title}</div>
          <div className="card__number">{this.props.number}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};


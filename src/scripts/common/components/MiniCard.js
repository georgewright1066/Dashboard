import React from 'react';

const MiniCard = ({ title, value, suffix }) => (
  <div className="mini-card">
    <div className="mini-card__container">
      <div className="mini-card__title-container">
        <h3 className="mini-card__title">{title}</h3>
      </div>
      <div className="mini-card__value-container">
        <h2 className="mini-card__value">{value}<span className="mini-card__suffix">{suffix}</span></h2>
      </div>
    </div>
  </div>
);

export default MiniCard;


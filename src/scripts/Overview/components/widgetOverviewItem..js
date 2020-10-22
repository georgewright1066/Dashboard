import React from 'react';

const WidgetItem = ({ title, value, id, onDeleteClick, onEditClick }) => (
  <div className="widget__item-button-container with-button">
    <span>{title} {value ? `:` : null} {value}</span>
      <button className={`button-primary`} onClick={() => onEditClick(id)}>
          Edit
      </button>
      <button className={`button-primary`} onClick={() => onDeleteClick(id)}>
          Delete
      </button>
  </div>
);

export default WidgetItem;

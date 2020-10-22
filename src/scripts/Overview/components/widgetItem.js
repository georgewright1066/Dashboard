import React from 'react';

const WidgetItem = ({ title, value }) => (
    <div className="widget__item-button-container">
        <span>{title} {value ? `:` : null} {value}</span>
    </div>
);

export default WidgetItem;

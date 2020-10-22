import React, { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';


function ToolTip({ content, className }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={classNames(`info-tooltip ${className}`, { 'active': hover })}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classNames(`info-tooltip__inner`, { 'active': hover })}>
        <div className="info-tooltip__inner-content-container">
          <span className="info-tooltip__inner-copy">{content}</span>
        </div>
      </div>

    </div>
  );
};

ToolTip.propTypes = {
  headings: propTypes.object,
  kpiData: propTypes.object
};


export default ToolTip;

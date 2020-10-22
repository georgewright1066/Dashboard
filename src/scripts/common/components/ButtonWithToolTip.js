import React, { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';


function ButtonWithToolTip({ handleClick, text, buttonClass, testId, content }) {
  const [hover, setHover] = useState(false)

  return (

    <button
      onClick={handleClick}
      className={classNames(`${buttonClass}`, { 'active': hover })}
      type="button"
      value={text}
      data-testid={testId}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="accessible-text">{text}</span>
      <div className={classNames('info-tooltip__inner', { 'active': hover })}>
        <div className="info-tooltip__inner-content-container">
          <span className="info-tooltip__inner-copy">{content}</span>
        </div>
      </div>
    </button>

  );
};

ButtonWithToolTip.propTypes = {
  headings: propTypes.object,
  kpiData: propTypes.object
};


export default ButtonWithToolTip;

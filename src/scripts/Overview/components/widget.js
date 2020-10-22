import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/components/Button';
import ToolTip from '../../common/components/Tooltip';


const Widget = ({ className, title, children, link, showButton, disableButton, content }) => (
  <div className={className}>
    <ToolTip content={content} />
    <div className="text__container">
      <div className="widget__header-container">
        <span>{title}</span>
      </div>
      <div className="widget__text-container" >{children}</div>
      {showButton && disableButton ?
        <Button
          text="More"
          buttonClass="button-primary widget__item-button-bottom disabled"/>
        : showButton ?
          <Link to={link}>
            <Button
              text="More >"
              buttonClass="button-primary"/>
          </Link> : null
      }

    </div>
  </div>
);

export default Widget;

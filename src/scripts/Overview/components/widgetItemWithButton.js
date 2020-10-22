import React from 'react';
import Button from '../../common/components/Button';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const WidgetItemWithButton = ({ title, value, link, text, className, testId }) => (
  <div className="widget__item-button-container with-button">
    <span>{title} | {value}</span>
    <Link className={classNames({ 'disabled': value === 0 && title !== 'Number of Cells' ? true : false })} to={link}>
      <Button
        text={text}
        buttonClass={classNames('button-primary', { 'disabled': value === 0 && title !== 'Number of Cells' ? true : false, className })}
        testId={testId}
      />
    </Link>
  </div>

);

export default WidgetItemWithButton;

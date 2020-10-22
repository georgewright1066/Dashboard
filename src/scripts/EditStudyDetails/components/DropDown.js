import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../../common/components/Button';

function DropDown({ options, onSelectItem, value, testId, className }) {
  const [active, setActive] = useState(true);
  const [item, setItem] = useState(value)
  function onDropDownClick() {
    setActive(!active);
  }

  function onMenuItemClick(e) {
    onDropDownClick()
    setItem(e.target.getAttribute('value'))
    onSelectItem(e.target.getAttribute('value'))
  }

  return (
    <div className="pretty-dropdown__container">
      <Button buttonClass="pretty-dropdown__button" testId="dropdownButton" text={item} handleClick={onDropDownClick} />
      <ul className={classNames('pretty-dropdown', className, { 'active': active })} name="dropdown">
        {
          options.map((option, key) =>
            <li onClick={onMenuItemClick}
              className={classNames("pretty-dropdown__list", { 'active': active })}
              key={key}
              tabIndex={key}
              value={option}
              data-testid={testId}
            >{option}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default DropDown;

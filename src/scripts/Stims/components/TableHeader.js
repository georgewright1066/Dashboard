import React from 'react';
import ToolTip from '../../common/components/Tooltip';
import Button from '../../common/components/Button';
import classNames from 'classnames';

function TableHeader({ data, onAscendingClick, onDecendingClick, activeTabElement }) {
  return (
    <tr>
      { data.map((item, index) => <>
      {item.name.toUpperCase() !== 'AOI' && item.name.toUpperCase() !== 'SOURCE'
          ? <th>
              <div className="table__top_container" key={index}>
                <h4>
                  {item.tooltip ? <ToolTip className="top" content={item.content} /> : null}
                  {item.name}
                </h4>
                <div className="sorting__container">
                  <Button
                      buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === `${item.name.toLowerCase()}-ascending` ? true : false })}
                      handleClick={() => onAscendingClick(item)}
                      text="Ascending"
                  />
                  <Button
                      buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === `${item.name.toLowerCase()}-decending` ? true : false })}
                      handleClick={() => onDecendingClick(item)}
                      text="Decending"
                  />
                </div>
              </div>
            </th>
          :  <th id={index}>
              <h4>
                {item.tooltip ? <ToolTip className="top" content={item.content} /> : null}
                {item.name}
              </h4>
            </th>}
    </>)}
    </tr>
  );
}

export default TableHeader;


import React, { useState } from 'react';
import classNames from 'classnames';


function StimsTable({ item, isTall }) {
  const [hover, setHoverState] = useState(false)

  return (
    <React.Fragment>
      <td
        onMouseEnter={() => setHoverState(!hover)}
        onMouseLeave={() => setHoverState(!hover)}
        className="stims__image--preview"
      >
        <h3 className={classNames("stims__image--heading", { 'active': !hover })}> Preview</h3>
        <img alt="preview" src={item['low_quality_source']} className={classNames("stims__image", { 'active': hover, 'tall': isTall })} />
      </td>
    </React.Fragment>
  );
}

export default StimsTable;


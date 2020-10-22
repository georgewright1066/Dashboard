import React, { useState } from 'react';
import classNames from 'classnames';
import Video from '../../common/components/Video';


function StimsTable({ item, isTall }) {
  const [hover, setHoverState] = useState(false)
  return (
    <td
      onMouseEnter={() => setHoverState(!hover)}
      onMouseLeave={() => setHoverState(!hover)}
      className="stims__image--preview"
    >
      <h3 className={classNames("stims__image--heading", { 'active': !hover })}> Preview</h3>
      {hover ? item.ad_type === 2 ?

        <img alt="preview" src={item['low_quality_source']} className={classNames("stims__image", { 'active': hover, 'tall': isTall })} /> :
        < Video
          className="visuals__video-container"
          videoSource={item.source}
        /> : null

      }


    </td>
  );
}

export default StimsTable;


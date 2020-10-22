import React, { useState, useEffect } from 'react';
import Image from '../../../common/components/Image';
import Video from '../../../common/components/Video';
import LoadingSpinner from '../../../common/components/LoadingSpinner';

import classNames from 'classnames';

function Visuals({ loading, filter, data }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [filter]);

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

  function onLoad() {
    setLoaded(false)
  }

  return (
    <React.Fragment>
      <div style={{ display: loaded ? "block" : "none" }}>
        <LoadingSpinner />
      </div>
      <div style={{ display: loading || loaded ? "none" : "flex" }} className="visuals">
        {data.data.map((item, index) => {
          const stimHeight = item.stim_height;
          const stimWidth = item.stim_width;
          const isHeightGreaterThanWidth = stimHeight > stimWidth ? true : false;
          const imageOrVideo = item.stim_type === 'video' ?
            <Video className="visuals__video-container"
              key={index}
              videoSource={item.original_url} /> :
            <Image onLoad={() => onLoad()}
              imageClass={classNames('study__image-container', { 'large': isHeightGreaterThanWidth })}
              key={index}
              source={item[filter]} />;

          return (
            imageOrVideo
          );

        })}

      </div>
    </React.Fragment>
  );

}

export default Visuals;



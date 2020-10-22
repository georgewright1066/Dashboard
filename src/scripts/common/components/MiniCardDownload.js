import React from 'react';
import { Link } from 'react-router-dom';
import ToolTip from '../../common/components/Tooltip';


const MiniCardDownload = ({ download, href, link, copy, className, content }) => (
  <div className="mini-card">
    {content ?
      <ToolTip content={content} />
      : null}
    <div className="mini-card__container">
      {link ? <Link className={className} to={href}>{copy}</Link> :
        <a download={download} href={href}>{`Click to download ${copy} data`}</a>
      }

    </div>
  </div>
);

export default MiniCardDownload;


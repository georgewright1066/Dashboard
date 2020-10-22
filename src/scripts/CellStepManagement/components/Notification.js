import React from 'react';
import classNames from 'classnames';

const Notification = ({ showNotification }) => (

  <div className={classNames('notification', { 'active': showNotification })} >
    <div className="notification__container">
      SAVED
    </div>
  </div >
);

export default Notification;
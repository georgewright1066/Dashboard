import React from 'react';

const Status = ({status}) => (
    <>
      {status === 'Live'
          ? <>
            <div className="Live status">
              Live
            </div>
            <div className="False status">
              Completed
            </div>
          </>
          : <>
            <div className="Live False status">
              Live
            </div>
            <div className="Completed status">
              Completed
            </div>
          </>}
    </>
);

export default Status;
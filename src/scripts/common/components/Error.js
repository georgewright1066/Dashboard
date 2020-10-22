import React from 'react';

const ErrorWidget = ({ message }) => (
  <div className="error-container">
    <div id="error-box">
      <div className="dot"></div>
      <div className="dot two"></div>
      <div className="face2">
        <div className="eye"></div>
        <div className="eye right"></div>
        <div className="mouth sad"></div>
      </div>
      <div className="shadow move"></div>
      <div className="message"><h1 className="alert error__heading">Error!</h1><p className="error__text">{message}</p></div>
    </div>
  </div>
);

export default ErrorWidget;

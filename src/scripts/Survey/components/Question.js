import React from 'react';
import classNames from 'classnames';

const Question = ({active , surveyQuestion}) => (
  <ul className={classNames({'active': active})}>
    <li>{surveyQuestion}</li>
  </ul>
);

export default Question;

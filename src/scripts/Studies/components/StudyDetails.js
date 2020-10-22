import React from 'react';
import PropTypes from 'prop-types';


const StudyDetails = ({brief, methodology, studyName}) => (
  <div className="study-details">
    <div className="study-details__name-container">
      <div className="study-details__label study-details__value">Name</div>
      <div className="study-details__value">{studyName}</div>
    </div>
    <div className="study-details__name-container">
      <div className="study-details__label study-details__value">Brief</div>
      <div className="study-details__value">{brief}</div>
    </div>
    <div className="study-details__name-container">
      <div className="study-details__label study-details__value">Methodology</div>
      <div className="study-details__value">{methodology}</div>
    </div>
  </div>
);

export default StudyDetails;

StudyDetails.propTypes = {
  brief: PropTypes.string,
  methodology: PropTypes.string,
  studyName: PropTypes.string,
};

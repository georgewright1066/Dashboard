import React from 'react';

const InContextLink = ({ link }) => (
  <div className="study__descriptor-container" >
    <h3>In context: </h3>
    <a href={link} target="_blank" rel="noopener noreferrer"><h3>Link</h3></a>
  </div>
);

export default InContextLink;

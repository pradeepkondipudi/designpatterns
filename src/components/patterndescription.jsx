// src/components/PatternDescription.js
import React from 'react';

const PatternDescription = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PatternDescription;

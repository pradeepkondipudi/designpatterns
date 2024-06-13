// RadioButton.js
import React from 'react';

const RadioButton = ({ label, name, checked, onChange }) => (
  <div>
    <label>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  </div>
);

export default RadioButton;

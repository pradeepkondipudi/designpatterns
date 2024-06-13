// formControlFactory.js
import React, { lazy } from 'react';

const LazyTextInput = lazy(() => import('./textinput'));
const LazyCheckbox = lazy(() => import('./checkbox'));
const LazyRadioButton = lazy(() => import('./Radiobutton'));



const formControlFactory = (control, formState, handleChange) => {
  switch (control.type) {
    case 'text':
      return (
        <LazyTextInput
          key={control.name}
          label={control.label}
          value={formState[control.name] || ''}
          onChange={(e) => handleChange(control.name, e.target.value)}
        />
      );
    case 'checkbox':
      return (
        <LazyCheckbox
          key={control.name}
          label={control.label}
          checked={formState[control.name] || false}
          onChange={(e) => handleChange(control.name, e.target.checked)}
        />
      );
    case 'radio':
      return (
        <LazyRadioButton
          key={control.name}
          label={control.label}
          name={control.name}
          checked={formState[control.name] === control.value}
          onChange={(e) => handleChange(control.name, control.value)}
        />
      );
    default:
      throw new Error(`Unknown control type: ${control.type}`);
  }
};

export default formControlFactory;

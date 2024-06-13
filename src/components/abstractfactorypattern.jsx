// src/components/AbstractFactoryPattern.js
import React from 'react';
import PatternDescription from './patterndescription';

// Button components
const DarkPrimaryButton = ({ onClick }) => (
  <button style={{ backgroundColor: 'black', color: 'white' }} onClick={onClick}>
    Dark Primary Button
  </button>
);

const DarkSecondaryButton = ({ onClick }) => (
  <button style={{ backgroundColor: 'darkgray', color: 'white' }} onClick={onClick}>
    Dark Secondary Button
  </button>
);

const LightPrimaryButton = ({ onClick }) => (
  <button style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={onClick}>
    Light Primary Button
  </button>
);

const LightSecondaryButton = ({ onClick }) => (
  <button style={{ backgroundColor: 'lightgray', color: 'black' }} onClick={onClick}>
    Light Secondary Button
  </button>
);

// Abstract Factory
const createButtonFactory = (theme) => {
  if (theme === 'dark') {
    return {
      createPrimaryButton: (onClick) => <DarkPrimaryButton onClick={onClick} />,
      createSecondaryButton: (onClick) => <DarkSecondaryButton onClick={onClick} />,
    };
  } else if (theme === 'light') {
    return {
      createPrimaryButton: (onClick) => <LightPrimaryButton onClick={onClick} />,
      createSecondaryButton: (onClick) => <LightSecondaryButton onClick={onClick} />,
    };
  }
  return null;
};

// Example usage
const AbstractFactoryPattern = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const darkThemeFactory = createButtonFactory('dark');
  const lightThemeFactory = createButtonFactory('light');

  const darkPrimaryButton = darkThemeFactory.createPrimaryButton(handleClick);
  const darkSecondaryButton = darkThemeFactory.createSecondaryButton(handleClick);

  const lightPrimaryButton = lightThemeFactory.createPrimaryButton(handleClick);
  const lightSecondaryButton = lightThemeFactory.createSecondaryButton(handleClick);

  return (
    <div className="pattern-container">
    <div className="pattern-output">
      <PatternDescription
        title="Abstract Factory Pattern"
        description="The Abstract Factory pattern provides a way to encapsulate a group of individual factories that have a common theme."
      />
      <h3>Dark Theme</h3>
      <div>{darkPrimaryButton}</div>
      <div>{darkSecondaryButton}</div>
      <h3>Light Theme</h3>
      <div>{lightPrimaryButton}</div>
      <div>{lightSecondaryButton}</div>
    </div>
    <div className="pattern-code">
    <pre>
      <code>
        {`
        import React from 'react';
        import PatternDescription from './patterndescription';
        
        // Button components
        const DarkPrimaryButton = ({ onClick }) => (
          <button style={{ backgroundColor: 'black', color: 'white' }} onClick={onClick}>
            Dark Primary Button
          </button>
        );
        
        const DarkSecondaryButton = ({ onClick }) => (
          <button style={{ backgroundColor: 'darkgray', color: 'white' }} onClick={onClick}>
            Dark Secondary Button
          </button>
        );
        
        const LightPrimaryButton = ({ onClick }) => (
          <button style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={onClick}>
            Light Primary Button
          </button>
        );
        
        const LightSecondaryButton = ({ onClick }) => (
          <button style={{ backgroundColor: 'lightgray', color: 'black' }} onClick={onClick}>
            Light Secondary Button
          </button>
        );
        
        // Abstract Factory
        const createButtonFactory = (theme) => {
          if (theme === 'dark') {
            return {
              createPrimaryButton: (onClick) => <DarkPrimaryButton onClick={onClick} />,
              createSecondaryButton: (onClick) => <DarkSecondaryButton onClick={onClick} />,
            };
          } else if (theme === 'light') {
            return {
              createPrimaryButton: (onClick) => <LightPrimaryButton onClick={onClick} />,
              createSecondaryButton: (onClick) => <LightSecondaryButton onClick={onClick} />,
            };
          }
          return null;
        };
        
        // Example usage
        const AbstractFactoryPattern = () => {
          const handleClick = () => {
            alert('Button clicked!');
          };
        
          const darkThemeFactory = createButtonFactory('dark');
          const lightThemeFactory = createButtonFactory('light');
        
          const darkPrimaryButton = darkThemeFactory.createPrimaryButton(handleClick);
          const darkSecondaryButton = darkThemeFactory.createSecondaryButton(handleClick);
        
          const lightPrimaryButton = lightThemeFactory.createPrimaryButton(handleClick);
          const lightSecondaryButton = lightThemeFactory.createSecondaryButton(handleClick);
        
          return (
            <div className="pattern-container">
            <div className="pattern-output">
              <PatternDescription
                title="Abstract Factory Pattern"
                description="The Abstract Factory pattern provides a way to encapsulate a group of individual factories that have a common theme."
              />
              <h3>Dark Theme</h3>
              <div>{darkPrimaryButton}</div>
              <div>{darkSecondaryButton}</div>
              <h3>Light Theme</h3>
              <div>{lightPrimaryButton}</div>
              <div>{lightSecondaryButton}</div>
            </div>`}
      </code>
      </pre>
      </div>
      </div>
  );
};

export default AbstractFactoryPattern;

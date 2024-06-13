// src/components/FactoryPattern.js
import React, { useState, Suspense } from 'react';
import PatternDescription from './patterndescription';
import './patternscontainer.css';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';




// Example usage
const FactoryPattern = () => {
  
  return (
    <Tabs>
      <TabList style={{ padding: 32 }}>
        <Tab>Definition</Tab>
        <Tab>Form Field Generator</Tab>
        <Tab>Dashboard Widget Loader</Tab>
        <Tab>Dynamic Menu Items</Tab>
        <Tab>Content Block Generator</Tab>
        <Tab>User Profile Sections</Tab>
      </TabList>
      <TabPanels >
        <TabPanel>
          <div className='description-container'>
          <p>
        Factory Pattern 
        <br></br>
        OOP: <strong>Factory pattern dynamically creates objects.</strong><br></br>
        ReactJS: <strong>Components can be dynamically rendered based on state or props.</strong></p>
            <h1>What is Factory Pattern</h1>
            <p>
            The Factory Design Pattern is a creational pattern used to encapsulate the process of <strong>object creation, </strong>
            making it more modular and scalable.
            </p>
            <h1>Same principle can be applied using Component Factories</h1>
          <p>
          Component Factories: You can create factories that return different React components based on input. 
          This pattern is useful when you need to generate a set of related components dynamically. 
          
          </p>
          <h1>Use Cases:</h1>
          <strong>
          
          <p>Form Field Generator</p>
          <p>Dashboard Widget Loader</p>
          <p>Dynamic Menu Items</p>
          <p>Content Block Generator</p>
          <p>User Profile Sections</p>
          </strong>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Form Field Generator"
              description="When building a form with various field types (text input, checkbox, radio button, etc.), 
              a factory can generate the correct component type based on the field’s metadata."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const formFieldFactory = (fieldType) => {
                switch (fieldType) {
                  case 'text':
                    return (props) => <input type="text" {...props} />;
                  case 'checkbox':
                    return (props) => <input type="checkbox" {...props} />;
                  case 'radio':
                    return (props) => <input type="radio" {...props} />;
                  default:
                    return null;
                }
              };
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Dashboard Widget Loader"
              description="Dynamically load different types of widgets (charts, tables, stats) on a dashboard based on configuration or user role."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const widgetFactory = (widgetType) => {
                switch (widgetType) {
                  case 'chart':
                    return (props) => <ChartComponent {...props} />;
                  case 'table':
                    return (props) => <TableComponent {...props} />;
                  case 'stats':
                    return (props) => <StatsComponent {...props} />;
                  default:
                    return null;
                }
              };
              
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Dynamic Menu Items"
              description="Create different menu items based on user role or application state."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const menuItemFactory = (itemType) => {
                switch (itemType) {
                  case 'admin':
                    return (props) => <AdminMenuItem {...props} />;
                  case 'user':
                    return (props) => <UserMenuItem {...props} />;
                  case 'guest':
                    return (props) => <GuestMenuItem {...props} />;
                  default:
                    return null;
                }
              };
              
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Content Block Generator"
              description="Generate different content blocks (text, image, video) dynamically for a content management system."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const contentBlockFactory = (blockType) => {
                switch (blockType) {
                  case 'text':
                    return (props) => <TextBlock {...props} />;
                  case 'image':
                    return (props) => <ImageBlock {...props} />;
                  case 'video':
                    return (props) => <VideoBlock {...props} />;
                  default:
                    return null;
                }
              };
              
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="User Profile Section"
              description="Load different sections of a user profile (about, settings, activity) based on user actions."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const profileSectionFactory = (sectionType) => {
                switch (sectionType) {
                  case 'about':
                    return (props) => <AboutSection {...props} />;
                  case 'settings':
                    return (props) => <SettingsSection {...props} />;
                  case 'activity':
                    return (props) => <ActivitySection {...props} />;
                  default:
                    return null;
                }
              };
              
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Form Field Generator"
              description="When building a form with various field types (text input, checkbox, radio button, etc.), 
              a factory can generate the correct component type based on the field’s metadata."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const formFieldFactory = (fieldType) => {
                switch (fieldType) {
                  case 'text':
                    return (props) => <input type="text" {...props} />;
                  case 'checkbox':
                    return (props) => <input type="checkbox" {...props} />;
                  case 'radio':
                    return (props) => <input type="radio" {...props} />;
                  default:
                    return null;
                }
              };
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Form Field Generator"
              description="When building a form with various field types (text input, checkbox, radio button, etc.), 
              a factory can generate the correct component type based on the field’s metadata."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const formFieldFactory = (fieldType) => {
                switch (fieldType) {
                  case 'text':
                    return (props) => <input type="text" {...props} />;
                  case 'checkbox':
                    return (props) => <input type="checkbox" {...props} />;
                  case 'radio':
                    return (props) => <input type="radio" {...props} />;
                  default:
                    return null;
                }
              };
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Form Field Generator"
              description="When building a form with various field types (text input, checkbox, radio button, etc.), 
              a factory can generate the correct component type based on the field’s metadata."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const formFieldFactory = (fieldType) => {
                switch (fieldType) {
                  case 'text':
                    return (props) => <input type="text" {...props} />;
                  case 'checkbox':
                    return (props) => <input type="checkbox" {...props} />;
                  case 'radio':
                    return (props) => <input type="radio" {...props} />;
                  default:
                    return null;
                }
              };
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Form Field Generator"
              description="When building a form with various field types (text input, checkbox, radio button, etc.), 
              a factory can generate the correct component type based on the field’s metadata."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const formFieldFactory = (fieldType) => {
                switch (fieldType) {
                  case 'text':
                    return (props) => <input type="text" {...props} />;
                  case 'checkbox':
                    return (props) => <input type="checkbox" {...props} />;
                  case 'radio':
                    return (props) => <input type="radio" {...props} />;
                  default:
                    return null;
                }
              };
              
               `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      </TabPanels>
    </Tabs>
    
  );
};

export default FactoryPattern;

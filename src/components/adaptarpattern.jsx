// src/components/ObserverPattern.js
import React, { createContext, useContext, useState } from 'react';
import PatternDescription from './patterndescription';
import './patternscontainer.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';



const AdaptarPattern = () => (
    <Tabs>
    <TabList style={{ padding: 32 }}>
      <Tab>Definition</Tab>
      <Tab>  Integrating Chart Libraries</Tab>
      <Tab> Normalizing Data for Data Grids</Tab>
      <Tab> Handling Different Date Formats</Tab>
      <Tab>Handling Localization Data</Tab>
      <Tab>Normalizing Image Data for Galleries</Tab>
    </TabList>
      <TabPanels >
      <TabPanel>
        <div className='description-container'>
          <h1>What is Adaptar Pattern</h1>
          <p>The Adapter Pattern allows incompatible interfaces to work together. It acts as a bridge between two <strong>incompatible interfaces.</strong> </p>
          
          <h1>Same principle can be applied using Props Transformation</h1>
          <p>
          Props Transformation: When integrating third-party libraries or APIs with different data formats, 
          you can create adapter components that <strong>transform props</strong> into a format expected by child components.
          </p>
          <h1>How Props Transformation Works in React:</h1>
          <p>
          Data Format Mismatch: When you receive data from an external API or third-party library, it often doesn't match the format your component expects.
          </p>
          <p>
          Adapter Component: You create an adapter component that acts as an intermediary. 
          This component receives the data in its original format, transforms it, and then passes it to the child components in the required format.
          </p>
          <p> 
          Props Transformation: The transformation logic within the adapter component ensures that the data is reshaped or mapped 
          accordingly before being passed down as props. 
          </p>
          
          <h1>Use Cases:</h1>
          <strong>
          
          <p>Integrating Chart Libraries</p>
          <p>Normalizing Data for Data Grids</p>
          <p>Handling Different Date Formats</p>
          <p>Handling Localization Data</p>
          <p>Normalizing Image Data for Galleries</p>
          
          </strong>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Integrating Chart Libraries"
              description="Chart libraries often require data in specific formats."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const ChartAdapter = ({ data, children }) => {
                const chartData = data.map(item => ({
                  xValue: item.x,
                  yValue: item.y
                }));
              
                return React.cloneElement(children, { data: chartData });
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
              title="Normalizing Data for Data Grids"
              description=" Data grids require specific row and column structures"
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                const DataGridAdapter = ({ data, children }) => {
                  const gridData = data.map(item => ({
                    id: item.id,
                    name: item.fullName,
                    email: item.email
                  }));
                
                  return React.cloneElement(children, { rows: gridData });
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
              title="Handling Different Date Formats"
              description="Date formats differ across various APIs."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                const DateAdapter = ({ dates, children }) => {
                  const formattedDates = dates.map(date => new Date(date).toISOString().split('T')[0]);
                
                  return React.cloneElement(children, { dates: formattedDates });
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
              title="Handling Localization Data"
              description="Different APIs provide localization data in various formats"
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                const LocalizationAdapter = ({ data, children }) => {
                  const localizedData = data.reduce((acc, item) => {
                    acc[item.key] = item.value;
                    return acc;
                  }, {});
                
                  return React.cloneElement(children, { translations: localizedData });
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
              title="Normalizing Image Data for Galleries"
              description="Image data can come in various structures from different sources."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               const ImageAdapter = ({ images, children }) => {
                const formattedImages = images.map(img => ({
                  src: img.url || img.src,
                  alt: img.description || img.alt,
                  title: img.title || 'Untitled'
                }));
              
                return React.cloneElement(children, { images: formattedImages });
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

export default AdaptarPattern;

// src/components/ObserverPattern.js
import React, { createContext, useContext, useState } from 'react';
import PatternDescription from './patterndescription';
import './patternscontainer.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';



const TemplateMethodPattern = () => (
    <Tabs>
    <TabList style={{ padding: 32 }}>
      <Tab>Definition</Tab>
      <Tab>  Customizable List Component with Render Props</Tab>
      <Tab> Dynamic Table with Render Props</Tab>
      <Tab> Conditional Rendering with Custom Hooks</Tab>
      <Tab>UI Layout with Render Props</Tab>
    </TabList>
      <TabPanels >
      <TabPanel>
        <div className='description-container'>
        <p>
        Template Method Pattern
        <br></br>
OOP: <strong>Defines an algorithm structure in a base class, allowing derived classes to implement specific steps.</strong><br></br>
ReactJS: <strong>Similar behavior achieved through HOCs or composition, allowing a base component to define structure with customizable parts provided by child components or props.</strong>
        </p>
          <h1>What is Template Method Pattern</h1>
          <p>The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. 
            It lets <strong>subclasses</strong> redefine certain steps of an algorithm <strong>without changing the algorithm’s structure.</strong> </p>
          
          <h1>Same principle can be applied using Component Composition</h1>
          <p>
          Component Composition: Creating base components that define a general structure and <strong>allowing child components to fill in the details. </strong>
          
          </p>
          <h1>Code Reusability</h1>
          <p>
            Advantage: This pattern encourages the reuse of code by defining a common structure and behavior that can be shared across different components.

            By abstracting common logic into higher-order components (HOCs), custom hooks, or render props, you avoid duplicating code 
            and make it easier to maintain. 
          </p>
          
          
          
          <h1>Use Cases:</h1>
          <strong>
          
          <p>Customizable List Component with Render Props</p>
          <p>Dynamic Table with Render Props</p>
          <p>Conditional Rendering with Custom Hooks</p>
          <p>UI Layout with Render Props</p>
          
          </strong>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Customizable List Component with Render Props"
              description="A list component provides a general structure for rendering a list, and child components can specify how each item is rendered."
            />
        <div className='description-container'>
                    <p>
                    TemplateList Component: List component provides a template for rendering a list. It <strong>does not know or care</strong> about 
                    the specifics of how each item should be rendered.
                    </p>
                    <p>
                    Concrete Implementations: The TasksList Component and Userlist Component each define their <strong>own list</strong> style representations.
                    </p>
                  </div>
          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               import React from 'react';

               function List({ items, renderItem }) {
                 return (
                   <ul>
                     {items.map((item, index) => (
                       <li key={index}>{renderItem(item)}</li>
                     ))}
                   </ul>
                 );
               }
               
               function TaskList() {
                 const tasks = [
                   { id: 1, title: 'Task 1', completed: false },
                   { id: 2, title: 'Task 2', completed: true },
                 ];
               
                 return (
                   <List
                     items={tasks}
                     renderItem={(task) => (
                       <div>
                         <strong>{task.title}</strong>
                         {task.completed ? <span> (Completed)</span> : <span> (Pending)</span>}
                       </div>
                     )}
                   />
                 );
               }
               
               function UserList() {
                 const users = [
                   { id: 1, name: 'Alice', age: 25 },
                   { id: 2, name: 'Bob', age: 30 },
                 ];
               
                 return (
                   <List
                     items={users}
                     renderItem={(user) => (
                       <div>
                         <span>{user.name}</span> <span>({user.age} years old)</span>
                       </div>
                     )}
                   />
                 );
               }
               
               function App() {
                 return (
                   <div>
                     <h1>Tasks</h1>
                     <TaskList />
                     <h1>Users
               
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
              title="Dynamic Table with Render Props"
              description=" A table component provides a general structure for displaying data, 
              and different components can specify how to render individual rows and cells."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                import React from 'react';

                function Table({ data, renderRow }) {
                  return (
                    <table>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>{renderRow(item)}</tr>
                        ))}
                      </tbody>
                    </table>
                  );
                }
                
                function UserTable() {
                  const users = [
                    { id: 1, name: 'John Doe', age: 25 },
                    { id: 2, name: 'Jane Smith', age: 30 },
                  ];
                
                  return (
                    <Table
                      data={users}
                      renderRow={(user) => (
                        <>
                          <td>{user.name}</td>
                          <td>{user.age}</td>
                        </>
                      )}
                    />
                  );
                }
                
                function ProductTable() {
                  const products = [
                    { id: 1, name: 'Product A', price: '$10' },
                    { id: 2, name: 'Product B', price: '$20' },
                  ];
                
                  return (
                    <Table
                      data={products}
                      renderRow={(product) => (
                        <>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                        </>
                      )}
                    />
                  );
                }
                
                function App() {
                  return (
                    <div>
                      <h1>Users</h1>
                      <UserTable />
                      <h1>Products</h1>
                      <ProductTable />
                    </div>
                  );
                }
                
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
              title="Conditional Rendering with Custom Hooks"
              description="A custom hook can handle the logic for conditional rendering, allowing the component to focus on the UI."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                import { useState } from 'react';

                function useToggle(initialState = false) {
                  const [state, setState] = useState(initialState);
                  const toggle = () => setState(!state);
                  return [state, toggle];
                }
                
                function ToggleableComponent() {
                  const [isToggled, toggle] = useToggle();
                
                  return (
                    <div>
                      <button onClick={toggle}>{isToggled ? 'Hide' : 'Show'} Content</button>
                      {isToggled && <div>This content is toggled.</div>}
                    </div>
                  );
                }
                
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
              title="UI Layout with Render Props"
              description="A render prop component can define a general structure of a layout and allow child components to render specific content."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                import React from 'react';

                function Layout({ renderHeader, renderContent, renderFooter }) {
                  return (
                    <div>
                      <header>{renderHeader()}</header>
                      <main>{renderContent()}</main>
                      <footer>{renderFooter()}</footer>
                    </div>
                  );
                }
                
                function App() {
                  return (
                    <Layout
                      renderHeader={() => <h1>Header Section</h1>}
                      renderContent={() => <p>This is the content section.</p>}
                      renderFooter={() => <p>Footer Section</p>}
                    />
                  );
                }
                
                `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
      
        </TabPanels>
        </Tabs>
  
);

export default TemplateMethodPattern;

// src/components/DecoratorPattern.js
import React from 'react';
import PatternDescription from './patterndescription';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';




const DecoratorPattern = () => (
  <Tabs>
    <TabList style={{ padding: 32 }}>
      <Tab>Definition</Tab>
      <Tab>  Authentication/Authorization</Tab>
      <Tab> Error Handling</Tab>
      <Tab> Logging</Tab>
      <Tab>Nested Decorators</Tab>
      <Tab> Styling and Theming</Tab>
      <Tab> Data Fetching</Tab>
      <Tab> Pagination</Tab>
      <Tab> Internationalization (i18n)</Tab>
      <Tab> Analytics Tracking</Tab>
    </TabList>
      <TabPanels >
      <TabPanel>
        <div className='description-container'>
        <p>Decorator Pattern 
        <br></br>
        OOP: <strong>Decorator pattern adds behavior to objects.</strong><br></br>
        ReactJS: <strong>HOCs add behavior to components.</strong></p>
          <h1>What is Decorator Pattern</h1>
          <p>The decorator pattern is a structural design pattern. 
            It allows for the <strong>dynamic extension of an object's functionality </strong>by wrapping it with a <strong>new object.</strong> 
            It achieves this extension by altering the object's structure. </p>
          <p>
          Object Composition: The decorator pattern involves object composition where decorators are 
          composed around an object to extend its functionality. This composition is a structural change because 
          it affects the object's structure without altering its class.
          </p>
          <p>
          Wrapper Objects: Decorators are wrapper objects that contain the original object. 
          These wrappers add new functionality by intercepting method calls to the original object, 
          providing additional behavior before or after delegating to the wrapped object.
          </p>
          <h1>What is HOC (higher order component)?</h1>
          <p>
          An HOC is a function that takes a component and <strong>returns a new component</strong> with additional props, state, or <strong>extended functionality.</strong> 
          This "wrapped" component retains the original component's interface but has enhanced or modified behavior.
          </p>
          <h1>Use Cases:</h1>
          <strong>
          
          <p>Authentication/Authorization</p>
          <p>Error Handling</p>
          <p>Logging</p>
          <p>Nested Decorators</p>
          <p>Styling and Theming</p>
          <p>Data Fetching</p>
          <p>Pagination</p>
          <p>Internationalization (i18n)</p>
          <p>Analytics Tracking</p>
          </strong>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="Authentication/Authorization"
              description="Wrap components to ensure only authenticated users can access them."
            />
          <div className='description-container'>
            <p>
Create a Higher-Order Component (HOC): The HOC will wrap the <strong>base component (ProtectedComponent.js)</strong> and add additional functionality.</p><p>
Wrap the Base Component with the HOC: The base component is wrapped by the <strong>HOC(withAuth.js)</strong> to produce an enhanced component.
            </p>
          </div>
          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
        // withAuth.js
        import React from 'react';
        import { Redirect } from 'react-router-dom';
        
        function withAuth(WrappedComponent) {
          return function AuthComponent(props) {
            const isAuthenticated = // your auth logic here
        
            if (!isAuthenticated) {
              return <Redirect to="/login" />;
            }
        
            return <WrappedComponent {...props} />;
          };
        }
        
        export default withAuth;
        
        // ProtectedComponent.js
        import React from 'react';
        import withAuth from './withAuth';
        
        function ProtectedComponent() {
          return <div>Protected Content</div>;
        }
        
        export default withAuth(ProtectedComponent);
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
              title="Error Handling"
              description="Catch and handle errors in components gracefully using an error boundary."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
       // withErrorBoundary.js
       import React, { Component } from 'react';
       
       function withErrorBoundary(WrappedComponent) {
         return class ErrorBoundary extends Component {
           constructor(props) {
             super(props);
             this.state = { hasError: false };
           }
       
           static getDerivedStateFromError(error) {
             return { hasError: true };
           }
       
           componentDidCatch(error, errorInfo) {
             // log the error to an error reporting service
           }
       
           render() {
             if (this.state.hasError) {
               return <h1>Something went wrong.</h1>;
             }
       
             return <WrappedComponent {...this.props} />;
           }
         };
       }
       
       export default withErrorBoundary;
       
       // SomeComponent.js
       import React from 'react';
       import withErrorBoundary from './withErrorBoundary';
       
       function SomeComponent() {
         // some code that might throw an error
         return <div>Some Component</div>;
       }
       
       export default withErrorBoundary(SomeComponent);
       
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
              title="Logging"
              description="Log component renders for debugging and performance monitoring."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // withLogger.js
                import React, { useEffect } from 'react';
                
                function withLogger(WrappedComponent) {
                  return function LoggerComponent(props) {
                    useEffect(() => {
                      console.log({WrappedComponent.name} rendered);
                    });
                
                    return <WrappedComponent {...props} />;
                  };
                }
                
                export default withLogger;
                
                // AnyComponent.js
                import React from 'react';
                import withLogger from './withLogger';
                
                function AnyComponent() {
                  return <div>Any Component</div>;
                }
                
                export default withLogger(AnyComponent);
                
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
              title="Nested Decorators"
              description="A component that uses multiple HOCs for different functionalities, such as logging, authentication, and error handling."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // withLogger.js
                import React, { useEffect } from 'react';
                
                const withLogger = (WrappedComponent) => {
                  return function LoggerComponent(props) {
                    useEffect(() => {
                      console.log("component rendered");
                    }, []);
                
                    return <WrappedComponent {...props} />;
                  };
                };
                
                export default withLogger;
                
                // withAuth.js
          import React from 'react';
          import { Redirect } from 'react-router-dom';

          const withAuth = (WrappedComponent) => {
            return function AuthComponent(props) {
              const isAuthenticated = // your auth logic here

              if (!isAuthenticated) {
                return <Redirect to="/login" />;
              }

              return <WrappedComponent {...props} />;
            };
          };

          export default withAuth;

          // withErrorBoundary.js
          import React, { Component } from 'react';
          
          const withErrorBoundary = (WrappedComponent) => {
            return class ErrorBoundary extends Component {
              constructor(props) {
                super(props);
                this.state = { hasError: false };
              }
          
              static getDerivedStateFromError(error) {
                return { hasError: true };
              }
          
              componentDidCatch(error, errorInfo) {
                // log the error to an error reporting service
                console.error(error, errorInfo);
              }
          
              render() {
                if (this.state.hasError) {
                  return <h1>Something went wrong.</h1>;
                }
          
                return <WrappedComponent {...this.props} />;
              }
            };
          };
          
          export default withErrorBoundary;

          // Component.js
        import React from 'react';
        import withLogger from './withLogger';
        import withAuth from './withAuth';
        import withErrorBoundary from './withErrorBoundary';

        function Component() {
          return <div>Protected Content</div>;
        }

        // Applying HOCs
        export default withLogger(withAuth(withErrorBoundary(Component)));

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
              title="Styling and Theming"
              description="Dynamically apply additional styles or themes to components."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // withTheme.js
                import React from 'react';
                
                function withTheme(WrappedComponent, theme) {
                  return function ThemedComponent(props) {
                    return (
                      <div style={theme}>
                        <WrappedComponent {...props} />
                      </div>
                    );
                  };
                }
                
                export default withTheme;
                
                // ThemedComponent.js
                import React from 'react';
                import withTheme from './withTheme';
                
                const theme = {
                  backgroundColor: 'lightblue',
                  padding: '10px',
                };
                
                function ThemedComponent() {
                  return <div>Themed Component</div>;
                }
                
                export default withTheme(ThemedComponent, theme);
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
              title="Data Fetching"
              description="Fetch data and pass it as props to the wrapped component."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // withDataFetching.js
                import React, { useState, useEffect } from 'react';
                
                function withDataFetching(WrappedComponent, url) {
                  return function DataFetchingComponent(props) {
                    const [data, setData] = useState(null);
                
                    useEffect(() => {
                      fetch(url)
                        .then((response) => response.json())
                        .then((data) => setData(data));
                    }, [url]);
                
                    return <WrappedComponent data={data} {...props} />;
                  };
                }
                
                export default withDataFetching;
                
                // DataComponent.js
                import React from 'react';
                import withDataFetching from './withDataFetching';
                
                function DataComponent({ data }) {
                  if (!data) return <div>Loading...</div>;
                
                  return (
                    <div>
                      {data.map((item) => (
                        <div key={item.id}>{item.name}</div>
                      ))}
                    </div>
                  );
                }
                
                export default withDataFetching(DataComponent, 'https://api.example.com/data');
                
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
              title="Pagination"
              description="HOC for handling pagination logic."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                const withPagination = (WrappedComponent, itemsPerPage) => {
                  return class extends React.Component {
                    state = {
                      currentPage: 1,
                      itemsPerPage,
                    };
                
                    handlePageChange = (page) => {
                      this.setState({ currentPage: page });
                    };
                
                    render() {
                      const { data } = this.props;
                      const { currentPage, itemsPerPage } = this.state;
                      const startIndex = (currentPage - 1) * itemsPerPage;
                      const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
                
                      return (
                        <div>
                          <WrappedComponent {...this.props} data={paginatedData} />
                          <Pagination
                            totalItems={data.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                          />
                        </div>
                      );
                    }
                  };
                };
                
                const DataComponent = (props) => (
                  <ul>
                    {props.data.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                );
                
                export default withPagination(DataComponent, 10);
                
                const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
                  const totalPages = Math.ceil(totalItems / itemsPerPage);
                  return (
                    <div>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          onClick={() => onPageChange(index + 1)}
                          disabled={index + 1 === currentPage}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  );
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
              title="Internationalization (i18n)"
              description="HOC for providing internationalization support to components."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
               {`
               import { IntlProvider, FormattedMessage } from 'react-intl';

               const withIntl = (WrappedComponent, messages) => {
                 return (props) => (
                   <IntlProvider locale={props.locale} messages={messages[props.locale]}>
                     <WrappedComponent {...props} />
                   </IntlProvider>
                 );
               };
               
               const messages = {
                 en: { greeting: 'Hello' },
                 fr: { greeting: 'Bonjour' },
               };
               
               const Greeting = () => (
                 <div>
                   <FormattedMessage id="greeting" />
                 </div>
               );
               
               export default withIntl(Greeting, messages);
               
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
              title="Analytics Tracking"
              description="HOC for tracking component usage or user interactions for analytics."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                const withAnalytics = (WrappedComponent, eventName) => {
                  return (props) => {
                    useEffect(() => {
                      console.log(Event: {eventName});
                      // Send analytics event here
                    }, []);
                
                    return <WrappedComponent {...props} />;
                  };
                };
                
                const Button = (props) => <button>{props.label}</button>;
                export default withAnalytics(Button, 'ButtonClick');
                
                `}
              </code>
            </pre>
          </div>
        </div>
      </TabPanel>
        </TabPanels>
        </Tabs>
  
);

export default DecoratorPattern;

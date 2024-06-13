// src/components/ObserverPattern.js
import React, { createContext, useContext, useState } from 'react';
import PatternDescription from './patterndescription';
import './patternscontainer.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';



const ObserverPattern = () => (
    <Tabs>
    <TabList style={{ padding: 32 }}>
      <Tab>Definition</Tab>
      <Tab>  User Authentication</Tab>
      <Tab> Shopping Cart</Tab>
      <Tab> Chat Application</Tab>
      <Tab>Multi-Step Form</Tab>
    </TabList>
      <TabPanels >
      <TabPanel>
        <div className='description-container'>
        <p>
        Observer Pattern
      <br></br>
        OOP: <strong>Observer pattern allows objects to react to changes in other objects.</strong><br></br>
        ReactJS: <strong>Context API and useReducer Hook allows components to get notified automatically to update changes.</strong></p>
          <h1>What is Observer Pattern</h1>
          <p>The Observer design pattern is a behavioral pattern that defines a <strong>one-to-many relationship</strong> between objects, 
            so when one object changes state, all its <strong>dependents are notified</strong> and updated automatically. </p>
          
          <h1>Same principle can be applied using Context API</h1>
          <p>
          In React, this pattern can be implemented using state management libraries like <strong>Redux</strong> or the <strong>Context API.</strong> 
          </p>
          <p>
          Context API: Allows you to create a global state that can be accessed by any component in the component 
          tree without passing props down manually at every level.
          </p>
          <p>
          useReducer Hook: Provides a way to manage complex state logic in functional components, 
          similar to useState, but more powerful for managing state transitions.
          </p>
          <h1>Application of Observer Pattern in React</h1>
          <p>
          Centralized State Management: Using Context and useReducer, you can centralize the state, 
          making it easier to manage and share state across multiple components.
          </p>
          <p>
          Decoupling Components: Components subscribe to state changes via context, 
          decoupling them from direct state management, which promotes reusability and modularity.
          </p>
          <p>
          Automatic Re-Renders: Components that consume context automatically re-render when the context value changes, 
          acting as observers that react to state changes.
          </p>
          <h1>Use Cases:</h1>
          <strong>
          
          <p>User Authentication</p>
          <p>Shopping Cart</p>
          <p>Chat Application</p>
          <p>Multi-Step Form</p>
          
          </strong>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="pattern-container">
          <div className="pattern-output">
            <PatternDescription
              title="User Authentication"
              description="User can observe the actions like login, logout."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
        // AuthContext.js
        import React, { createContext, useReducer, useContext } from 'react';
        
        const AuthStateContext = createContext();
        const AuthDispatchContext = createContext();
        
        const authReducer = (state, action) => {
          switch (action.type) {
            case 'login':
              return { ...state, user: action.payload };
            case 'logout':
              return { ...state, user: null };
            default:
              throw new Error('Unknown action');
          }
        };
        
        export const AuthProvider = ({ children }) => {
          const [state, dispatch] = useReducer(authReducer, { user: null });
        
          return (
            <AuthStateContext.Provider value={state}>
              <AuthDispatchContext.Provider value={dispatch}>
                {children}
              </AuthDispatchContext.Provider>
            </AuthStateContext.Provider>
          );
        };
        
        export const useAuthState = () => useContext(AuthStateContext);
        export const useAuthDispatch = () => useContext(AuthDispatchContext);
        
        // Login.js
        import React from 'react';
        import { useAuthDispatch } from './AuthContext';

        function Login() {
        const dispatch = useAuthDispatch();

        const handleLogin = () => {
            // Perform login logic here
            const user = { name: 'John Doe' };
            dispatch({ type: 'login', payload: user });
        };

        return <button onClick={handleLogin}>Login</button>;
        }

        export default Login;

        // App.js
        import React from 'react';
        import { AuthProvider } from './AuthContext';
        import Login from './Login';

        function App() {
        return (
            <AuthProvider>
            <div>
                <h1>User Authentication</h1>
                <Login />
            </div>
            </AuthProvider>
        );
        }

        export default App;


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
              title="Shopping Cart"
              description="User can observe for cart actions like additem, removeitem"
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // CartContext.js
                import React, { createContext, useReducer, useContext } from 'react';
                
                const CartStateContext = createContext();
                const CartDispatchContext = createContext();
                
                const cartReducer = (state, action) => {
                  switch (action.type) {
                    case 'add_item':
                      return { ...state, items: [...state.items, action.payload] };
                    case 'remove_item':
                      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
                    default:
                      throw new Error('Unknown action');
                  }
                };
                
                export const CartProvider = ({ children }) => {
                  const [state, dispatch] = useReducer(cartReducer, { items: [] });
                
                  return (
                    <CartStateContext.Provider value={state}>
                      <CartDispatchContext.Provider value={dispatch}>
                        {children}
                      </CartDispatchContext.Provider>
                    </CartStateContext.Provider>
                  );
                };
                
                export const useCartState = () => useContext(CartStateContext);
                export const useCartDispatch = () => useContext(CartDispatchContext);
                

                // AddToCart.js
                import React from 'react';
                import { useCartDispatch } from './CartContext';

                function AddToCart({ item }) {
                const dispatch = useCartDispatch();

                return (
                    <button onClick={() => dispatch({ type: 'add_item', payload: item })}>
                    Add to Cart
                    </button>
                );
                }

                export default AddToCart;

                // Cart.js
            import React from 'react';
            import { useCartState } from './CartContext';

            function Cart() {
            const { items } = useCartState();

            return (
                <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
                </div>
            );
            }

            export default Cart;

            // App.js
            import React from 'react';
            import { CartProvider } from './CartContext';
            import AddToCart from './AddToCart';
            import Cart from './Cart';

            function App() {
            const sampleItem = { id: 1, name: 'Sample Item' };

            return (
                <CartProvider>
                <div>
                    <h1>Shopping Cart Example</h1>
                    <AddToCart item={sampleItem} />
                    <Cart />
                </div>
                </CartProvider>
            );
            }

            export default App;



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
              title="Chat Application"
              description="User can observe the actions like send message, unreadmessage"
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // ChatContext.js
                import React, { createContext, useReducer, useContext } from 'react';
                
                const ChatStateContext = createContext();
                const ChatDispatchContext = createContext();
                
                const chatReducer = (state, action) => {
                  switch (action.type) {
                    case 'send_message':
                      return { ...state, messages: [...state.messages, action.payload] };
                    default:
                      throw new Error('Unknown action');
                  }
                };
                
                export const ChatProvider = ({ children }) => {
                  const [state, dispatch] = useReducer(chatReducer, { messages: [] });
                
                  return (
                    <ChatStateContext.Provider value={state}>
                      <ChatDispatchContext.Provider value={dispatch}>
                        {children}
                      </ChatDispatchContext.Provider>
                    </ChatStateContext.Provider>
                  );
                };
                
                export const useChatState = () => useContext(ChatStateContext);
                export const useChatDispatch = () => useContext(ChatDispatchContext);

                // ChatInput.js
                import React, { useState } from 'react';
                import { useChatDispatch } from './ChatContext';

                function ChatInput() {
                const [message, setMessage] = useState('');
                const dispatch = useChatDispatch();

                const handleSendMessage = () => {
                    const newMessage = { id: Date.now(), text: message };
                    dispatch({ type: 'send_message', payload: newMessage });
                    setMessage('');
                };

                return (
                    <div>
                    <input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Type a message"
                    />
                    <button onClick={handleSendMessage}>Send</button>
                    </div>
                );
                }

                export default ChatInput;

                // ChatMessages.js
                import React from 'react';
                import { useChatState } from './ChatContext';

                function ChatMessages() {
                const { messages } = useChatState();

                return (
                    <div>
                    <h2>Messages</h2>
                    <ul>
                        {messages.map(message => (
                        <li key={message.id}>{message.text}</li>
                        ))}
                    </ul>
                    </div>
                );
                }

                export default ChatMessages;

                // App.js
                import React from 'react';
                import { ChatProvider } from './ChatContext';
                import ChatInput from './ChatInput';
                import ChatMessages from './ChatMessages';

                function App() {
                return (
                    <ChatProvider>
                    <div>
                        <h1>Chat Application</h1>
                        <ChatInput />
                        <ChatMessages />
                    </div>
                    </ChatProvider>
                );
                }

                export default App;


                
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
              title="Multi-Step Form"
              description="A component that uses multiple HOCs for different functionalities, such as logging, authentication, and error handling."
            />

          </div>
          <div className="pattern-code">
            <pre>
              <code>
                {`
                // FormContext.js
                import React, { createContext, useReducer, useContext } from 'react';
                
                const FormStateContext = createContext();
                const FormDispatchContext = createContext();
                
                const formReducer = (state, action) => {
                  switch (action.type) {
                    case 'next_step':
                      return { ...state, step: state.step + 1 };
                    case 'prev_step':
                      return { ...state, step: state.step - 1 };
                    case 'update_data':
                      return { ...state, data: { ...state.data, ...action.payload } };
                    default:
                      throw new Error('Unknown action');
                  }
                };
                
                export const FormProvider = ({ children }) => {
                  const [state, dispatch] = useReducer(formReducer, { step: 1, data: {} });
                
                  return (
                    <FormStateContext.Provider value={state}>
                      <FormDispatchContext.Provider value={dispatch}>
                        {children}
                      </FormDispatchContext.Provider>
                    </FormStateContext.Provider>
                  );
                };
                
                export const useFormState = () => useContext(FormStateContext);
                export const useFormDispatch = () => useContext(FormDispatchContext);

                // StepOne.js
                import React from 'react';
                import { useFormDispatch } from './FormContext';

                function StepOne() {
                const dispatch = useFormDispatch();

                const handleNext = () => {
                    dispatch({ type: 'next_step' });
                };

                return (
                    <div>
                    <h2>Step One</h2>
                    <button onClick={handleNext}>Next</button>
                    </div>
                );
                }

                export default StepOne;

                // StepTwo.js
                import React from 'react';
                import { useFormDispatch } from './FormContext';

                function StepTwo() {
                const dispatch = useFormDispatch();

                const handleNext = () => {
                    dispatch({ type: 'next_step' });
                };

                const handlePrev = () => {
                    dispatch({ type: 'prev_step' });
                };

                return (
                    <div>
                    <h2>Step Two</h2>
                    <button onClick={handlePrev}>Back</button>
                    <button onClick={handleNext}>Next</button>
                    </div>
                );
                }

                export default StepTwo;

                // Form.js
                import React from 'react';
                import { useFormState } from './FormContext';
                import StepOne from './StepOne';
                import StepTwo from './StepTwo';

                function Form() {
                const { step } = useFormState();

                switch (step) {
                    case 1:
                    return <StepOne />;
                    case 2:
                    return <StepTwo />;
                    default:
                    return <div>Invalid Step</div>;
                }
                }

                export default Form;

                // App.js
            import React from 'react';
            import { FormProvider } from './FormContext';
            import Form from './Form';

            function App() {
            return (
                <FormProvider>
                <div>
                    <h1>Multi-Step Form</h1>
                    <Form />
                </div>
                </FormProvider>
            );
            }

            export default App;



                
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

export default ObserverPattern;

// src/components/StrategyPattern.js
import React, { createContext, useContext, useState } from 'react';
import PatternDescription from './patterndescription';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';


const StrategyPattern = () => (
  
        <Tabs>
        <TabList style={{ padding: 32 }}>
          <Tab>Definition</Tab>
          <Tab>  Payment Processing</Tab>
          <Tab> Form Validation</Tab>
          <Tab> Sorting Algorithms</Tab>
          <Tab>Authentication Methods</Tab>
          <Tab> Notification Systems</Tab>
          
        </TabList>
          <TabPanels >
          <TabPanel>
            <div className='description-container'>
            <p>
        Strategy Pattern 
        <br></br>
        OOP: <strong>Strategy pattern allows dynamic selection of algorithms.</strong><br></br>
        ReactJS: <strong>Composition and Hooks allow dynamic rendering logic.</strong></p>
            <h1>What is Strategy Pattern</h1>
          <p>The Strategy Design Pattern is a behavioral design pattern that enables selecting an <strong>algorithm's behavior at runtime. </strong>
            This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
            </p>
          <p>
          Strategy: This is the common interface for all supported algorithms. Context uses this interface to call the algorithm defined by a ConcreteStrategy.
          </p>
          <p>
          ConcreteStrategy: These are classes that implement the Strategy interface, each providing different implementations of the algorithm.
          </p>
          <p>Context: This class uses a Strategy and provides a method to set or change the Strategy. It calls the algorithm defined by a ConcreteStrategy.</p>

          <h1>Same principle can be applied</h1>
          <p>
          In reactjs you can implement the principles of the Strategy Pattern using React's composition and hooks.
          </p>
              <h1>Use Cases:</h1>
              <strong>
              
              <p>Payment Processing</p>
              <p>Form Validation</p>
              <p>Sorting Algorithms</p>
              <p>Authentication Methods</p>
              <p>Notification Systems</p>
              
              </strong>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="pattern-container">
              <div className="pattern-output">
                <PatternDescription
                  title="Payment Processing"
                  description="Different payment methods require different processing strategies."
                />
    
              </div>
              <div className="pattern-code">
                <pre>
                  <code>
                {`
                    // PaymentStrategy.js
                    export const PayPalPayment = {
                      pay: () => console.log('Processing PayPal payment...')
                    };
                    
                    export const CreditCardPayment = {
                      pay: () => console.log('Processing Credit Card payment...')
                    };
                    
                    export const BitcoinPayment = {
                      pay: () => console.log('Processing Bitcoin payment...')
                    };
                    
                    
                    // PaymentComponent.js
                    import React, { useState } from 'react';
                    import { PayPalPayment, CreditCardPayment, BitcoinPayment } from './PaymentStrategies';

                    const PaymentComponent = () => {
                      const [strategy, setStrategy] = useState(null);

                      const handlePayment = () => {
                        if (strategy) {
                          strategy.pay();
                        } else {
                          console.log('Select a payment method.');
                        }
                      };

                      const selectStrategy = (method) => {
                        switch (method) {
                          case 'paypal':
                            setStrategy(PayPalPayment);
                            break;
                          case 'creditcard':
                            setStrategy(CreditCardPayment);
                            break;
                          case 'bitcoin':
                            setStrategy(BitcoinPayment);
                            break;
                          default:
                            setStrategy(null);
                        }
                      };

                      return (
                        <div>
                          <select onChange={(e) => selectStrategy(e.target.value)}>
                            <option value="">Select Payment Method</option>
                            <option value="paypal">PayPal</option>
                            <option value="creditcard">Credit Card</option>
                            <option value="bitcoin">Bitcoin</option>
                          </select>
                          <button onClick={handlePayment}>Pay Now</button>
                        </div>
                      );
                    };

                    export default PaymentComponent;

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
                  title="Form Validation"
                  description="Different validation strategies for form fields."
                />
    
              </div>
              <div className="pattern-code">
                <pre>
                  <code>
                    {`
                    // ValidationStrategies.js
                    export const RequiredValidation = {
                      validate: (value) => value.trim() !== ''
                    };
                    
                    export const EmailValidation = {
                      validate: (value) => {
                        const emailRegex = /\S+@\S+\.\S+/;
                        return emailRegex.test(value);
                      }
                    };
                    
                    
                    // FormComponent.js
                    import React, { useState } from 'react';
                    import { RequiredValidation, EmailValidation } from './ValidationStrategies';

                    const FormComponent = () => {
                      const [value, setValue] = useState('');
                      const [strategy, setStrategy] = useState(RequiredValidation);

                      const handleValidation = () => {
                        if (strategy.validate(value)) {
                          console.log('Validation passed');
                        } else {
                          console.log('Validation failed');
                        }
                      };

                      return (
                        <div>
                          <input type="text" onChange={(e) => setValue(e.target.value)} />
                          <select onChange={(e) => setStrategy(e.target.value === 'email' ? EmailValidation : RequiredValidation)}>
                            <option value="required">Required</option>
                            <option value="email">Email</option>
                          </select>
                          <button onClick={handleValidation}>Validate</button>
                        </div>
                      );
                    };

                    export default FormComponent;

                    
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
                  title="Sorting Algorithms"
                  description="Different sorting strategies for sorting data."
                />
    
              </div>
              <div className="pattern-code">
                <pre>
                  <code>
                    {`
                    // SortingStrategies.js
                    export const BubbleSort = {
                      sort: (data) => {
                        const arr = [...data];
                        for (let i = 0; i < arr.length - 1; i++) {
                          for (let j = 0; j < arr.length - i - 1; j++) {
                            if (arr[j] > arr[j + 1]) {
                              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                            }
                          }
                        }
                        return arr;
                      }
                    };
                    
                    export const QuickSort = {
                      sort: (data) => {
                        if (data.length < 2) return data;
                        const pivot = data[0];
                        const lesser = data.slice(1).filter((item) => item <= pivot);
                        const greater = data.slice(1).filter((item) => item > pivot);
                        return [...QuickSort.sort(lesser), pivot, ...QuickSort.sort(greater)];
                      }
                    };
                    
                    
                    // SortComponent.js
                    import React, { useState } from 'react';
                    import { BubbleSort, QuickSort } from './SortingStrategies';

                    const SortComponent = () => {
                      const [data, setData] = useState([5, 3, 8, 1, 2]);
                      const [strategy, setStrategy] = useState(BubbleSort);

                      const handleSort = () => {
                        setData(strategy.sort(data));
                      };

                      return (
                        <div>
                          <select onChange={(e) => setStrategy(e.target.value === 'quick' ? QuickSort : BubbleSort)}>
                            <option value="bubble">Bubble Sort</option>
                            <option value="quick">Quick Sort</option>
                          </select>
                          <button onClick={handleSort}>Sort</button>
                          <div>{data.join(', ')}</div>
                        </div>
                      );
                    };

                    export default SortComponent;

                    
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
                  title="Authentication Methods"
                  description="Different strategies for authentication (e.g., OAuth, JWT)."
                />
    
              </div>
              <div className="pattern-code">
                <pre>
                  <code>
                   {`
                   // AuthStrategies.js
                   export const OAuth = {
                    authenticate: () => console.log('Authenticating with OAuth...')
                  };
                  
                  export const JWT = {
                    authenticate: () => console.log('Authenticating with JWT...')
                  };
                  
                   
                   // AuthComponent.js
                   import React, { useState } from 'react';
                    import { OAuth, JWT } from './AuthStrategies';

                    const AuthComponent = () => {
                      const [strategy, setStrategy] = useState(OAuth);

                      const handleAuth = () => {
                        strategy.authenticate();
                      };

                      return (
                        <div>
                          <select onChange={(e) => setStrategy(e.target.value === 'jwt' ? JWT : OAuth)}>
                            <option value="oauth">OAuth</option>
                            <option value="jwt">JWT</option>
                          </select>
                          <button onClick={handleAuth}>Authenticate</button>
                        </div>
                      );
                    };

                    export default AuthComponent;

                   
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
                  title="Notification Systems"
                  description="Different strategies for sending notifications (e.g., Email, SMS, Push)."
                />
    
              </div>
              <div className="pattern-code">
                <pre>
                  <code>
                    {`
                    // NotificationStrategies.js
                    export const EmailNotification = {
                      send: (message) => console.log('Sending email')
                    };
                    
                    export const SMSNotification = {
                      send: (message) => console.log('Sending SMS')
                    };
                    
                    export const PushNotification = {
                      send: (message) => console.log('Sending push notification')
                    };
                    
                    
                    // NotificationComponent.js
                    import React, { useState } from 'react';
                    import { EmailNotification, SMSNotification, PushNotification } from './NotificationStrategies';

                    const NotificationComponent = () => {
                      const [message, setMessage] = useState('');
                      const [strategy, setStrategy] = useState(EmailNotification);

                      const handleSend = () => {
                        strategy.send(message);
                      };

                      return (
                        <div>
                          <input type="text" onChange={(e) => setMessage(e.target.value)} />
                          <select onChange={(e) => {
                            switch (e.target.value) {
                              case 'sms':
                                setStrategy(SMSNotification);
                                break;
                              case 'push':
                                setStrategy(PushNotification);
                                break;
                              default:
                                setStrategy(EmailNotification);
                            }
                          }}>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="push">Push Notification</option>
                          </select>
                          <button onClick={handleSend}>Send Notification</button>
                        </div>
                      );
                    };

                    export default NotificationComponent;

                    `}
                  </code>
                </pre>
              </div>
            </div>
          </TabPanel>
          
            </TabPanels>
            </Tabs>
);

export default StrategyPattern;

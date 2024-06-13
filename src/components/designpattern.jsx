// src/components/PatternDescription.js
import React from 'react';
import reusegif from '../assets/reuse.gif';
import modulegif from '../assets/modularity.gif';
import maintaingif from '../assets/maintain.gif';
import scalegif from '../assets/scaling.webp';

const DesignPattern = () => {
  return (
    <div className='description-container'>
      <h1>Origins in Architecture</h1>
      <p>1977: Christopher Alexander, along with his colleagues, published <strong>“A Pattern Language: Towns, Buildings, Construction.”</strong> </p>
      <p>The concept was to create a "pattern language" that could be used to solve common design problems in architecture and urban planning.</p>
      <p>1987: Kent Beck and Ward Cunningham, two software engineers, introduced the <strong>idea of design patterns</strong> into the field of software development</p>
      <h1>What are Design Patterns in general?</h1>
      <p>Design patterns are <strong>reusable solutions</strong> to common problems that occur during software design and development.
        They represent best practices evolved over time by experienced software developers. 
        These patterns provide a structured approach to designing code that makes it more <strong>modular, maintainable, and scalable.</strong> </p>
        <img src={reusegif} width="300" alt="Description of GIF"></img>
      <p>
        Design patterns typically address specific issues in software development, such as <strong>managing object creation,
        structuring classes and objects, handling communication between objects,</strong>  and organizing code flow. By applying design patterns,
        developers can avoid reinventing the wheel and benefit from proven solutions to common problems.
      </p>
      <h1>Goals to achieve when utilizing Design Patterns (Modular, Maintainable, Scalable)</h1>
       <p>
       Modular : Modularity in software design refers to the practice of <strong>breaking down a system into smaller, 
       self-contained units</strong> (modules) that can be developed, tested, and maintained independently. 
       Each module should have a well-defined interface that specifies how it interacts with other modules. 
       This allows developers to focus on one part of the system at a time, making it easier to understand, debug, and modify.

       </p>
       <img src={modulegif} width="300" alt="Description of GIF"></img>
       <p>
        Maintainable  : Maintainability refers to the ease with which a 
        software system can be <strong>modified, extended, or repaired</strong> over time. 
        A maintainable system is well-structured, well-documented, and adheres to coding standards and best practices. 
        It minimizes the risk of introducing bugs or unintended side effects when making changes.
       </p>
       <img src={maintaingif} width="300" alt="Description of GIF"></img>
       <p>
        Scalable  : Scalability refers to the ability of a system to handle <strong>increasing loads</strong> or accommodate 
        growth in terms of users, <strong>data volume, or transaction throughput</strong>  without sacrificing performance or reliability. 
        A scalable system can effectively utilize resources and distribute workloads to meet growing demands.

       </p>
       <img src={scalegif} width="300" alt="Description of GIF"></img>
      <h1>Traditional OOPs vs ReactJS on employing design patterns</h1>
      <p>
        Encapsulation <br></br>OOP: <strong>Objects encapsulate state and behavior.</strong><br></br>
        ReactJS: <strong>Components encapsulate state and behavior.</strong></p>
        
        <p>Inheritance and Composition
        <br></br>
        OOP: <strong>Inheritance and composition are used for code reuse; composition is often preferred for flexibility.</strong>
        <br></br>
        ReactJS: <strong>Strong emphasis on composition using props and children to build complex UIs.</strong></p>
        <p>
        Polymorphism
        <br></br>
        OOP: <strong>Polymorphism allows objects of different classes to be treated uniformly through a common interface.</strong><br></br>
        ReactJS: <strong>Polymorphism is achieved through component composition and props, allowing components to adapt and render differently based on given inputs.</strong>
      </p>
      
        
        
        {/* <h1>Use Cases:</h1>
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
          </strong> */}
       
        
        
       
    </div>
  );
};

export default DesignPattern;

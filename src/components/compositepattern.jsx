// src/components/CompositePattern.js
import React, { useState } from 'react';
import PatternDescription from './patterndescription';

const CompositeField = ({ label, children }) => (
  <div>
    <label>{label}</label>
    {children}
  </div>
);

const Field = ({ label, value, onChange }) => (
  <CompositeField label={label}>
    <input value={value} onChange={onChange} />
  </CompositeField>
);

const AddressField = ({ address, onChange }) => (
  <div>
    <Field label="Street" value={address.street} onChange={(e) => onChange({ ...address, street: e.target.value })} />
    <Field label="City" value={address.city} onChange={(e) => onChange({ ...address, city: e.target.value })} />
  </div>
);

const UserField = ({ user, onChange }) => (
  <div>
    <Field label="Name" value={user.name} onChange={(e) => onChange({ ...user, name: e.target.value })} />
    <AddressField address={user.address} onChange={(address) => onChange({ ...user, address })} />
  </div>
);

const Form = () => {
  const [user, setUser] = useState({ name: '', address: { street: '', city: '' } });

  return (
    <div>
      <UserField user={user} onChange={setUser} />
      <button onClick={() => console.log(user)}>Submit</button>
    </div>
  );
};

const CompositePattern = () => (
  <div className="pattern-container">
    <div className="pattern-output">
    <PatternDescription 
      title="Composite Pattern" 
      description="The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies."
    />
    <Form />
  </div>
  <div className="pattern-code">
    <pre>
      <code>
        {`
        import React, { useState } from 'react';
        import PatternDescription from './patterndescription';
        
        const CompositeField = ({ label, children }) => (
          <div>
            <label>{label}</label>
            {children}
          </div>
        );
        
        const Field = ({ label, value, onChange }) => (
          <CompositeField label={label}>
            <input value={value} onChange={onChange} />
          </CompositeField>
        );
        
        const AddressField = ({ address, onChange }) => (
          <div>
            <Field label="Street" value={address.street} onChange={(e) => onChange({ ...address, street: e.target.value })} />
            <Field label="City" value={address.city} onChange={(e) => onChange({ ...address, city: e.target.value })} />
          </div>
        );
        
        const UserField = ({ user, onChange }) => (
          <div>
            <Field label="Name" value={user.name} onChange={(e) => onChange({ ...user, name: e.target.value })} />
            <AddressField address={user.address} onChange={(address) => onChange({ ...user, address })} />
          </div>
        );
        
        const Form = () => {
          const [user, setUser] = useState({ name: '', address: { street: '', city: '' } });
        
          return (
            <div>
              <UserField user={user} onChange={setUser} />
              <button onClick={() => console.log(user)}>Submit</button>
            </div>
          );
        };
        
        const CompositePattern = () => (
          <div className="pattern-container">
            <div className="pattern-output">
            <PatternDescription 
              title="Composite Pattern" 
              description="The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies."
            />
            <Form />
          </div>`}
      </code>
      </pre>
      </div>
  </div>
);

export default CompositePattern;

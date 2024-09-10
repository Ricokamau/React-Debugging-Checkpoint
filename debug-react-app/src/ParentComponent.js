// src/ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import DisplayMessage from './components/DisplayMessage';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>

      {/* Pass props to ChildComponent */}
      <ChildComponent 
        count={count} 
        incrementCount={incrementCount} 
        message={message}
        setMessage={setMessage}
      />

      {/* Pass props to DisplayMessage */}
      <DisplayMessage message={message} />
    </div>
  );
};

export default ParentComponent;

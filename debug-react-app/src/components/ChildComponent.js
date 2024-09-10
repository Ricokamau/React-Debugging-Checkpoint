// src/components/ChildComponent.js
import React from 'react';

const ChildComponent = ({ count, incrementCount, message, setMessage }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Count: {count}</p>

      {/* Button to call the parent function to increment the count */}
      <button onClick={incrementCount}>Increment Count</button>

      {/* Input to update the message in the parent */}
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message" 
      />
    </div>
  );
};

export default ChildComponent;

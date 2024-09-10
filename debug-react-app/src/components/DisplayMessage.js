// src/components/DisplayMessage.js
import React from 'react';

const DisplayMessage = ({ message }) => {
  return (
    <div>
      <h3>Display Message Component</h3>
      <p>Message: {message}</p>
    </div>
  );
};

export default DisplayMessage;

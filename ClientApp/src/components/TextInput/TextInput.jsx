import React from 'react';
import "./TextInput.scss";

function TextInput({ placeholder }) {
  return (
    <input
      className="text-input"
      placeholder={placeholder}
    />
  );
}

export default TextInput;

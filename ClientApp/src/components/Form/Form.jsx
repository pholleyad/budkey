import React from 'react';

function Form({ children, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;

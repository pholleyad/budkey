import React from 'react';

function Form({ children, className, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;

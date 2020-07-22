import React from 'react';

function Form(props) {
  const { children, onSubmit } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;

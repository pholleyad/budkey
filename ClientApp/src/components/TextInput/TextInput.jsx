import React from 'react';
import "./TextInput.scss";

function TextInput(props) {
  const { className, onChange } = props;
  const classNames = ["text-input"];
  if (!!className) classNames.push(className);

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      {...props}
      className={classNames.join(" ")}
      onChange={handleChange}
    />
  );
}

export default TextInput;

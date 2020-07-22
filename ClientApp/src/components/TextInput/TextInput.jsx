import React from 'react';
import "./TextInput.scss";

function TextInput(props) {
  const { className } = props;
  const classNames = ["text-input"];
  if (!!className) classNames.push(className);

  return (
    <input
      {...props}
      className={classNames.join(" ")}
    />
  );
}

export default TextInput;

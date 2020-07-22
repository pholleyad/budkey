import React from 'react';
import PropTypes from "prop-types";
import "./Button.scss";

function Button(props) {
  const { children, className } = props;
  const classNames = ["button"];
  if (!!className) classNames.push(className);

  return (
    <button
      {...props}
      className={classNames.join(" ")}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  type: "submit"
};

export default Button;

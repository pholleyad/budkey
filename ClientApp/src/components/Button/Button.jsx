import React from 'react';
import PropTypes from "prop-types";
import "./Button.scss";

function Button({
  children,
  onClick,
  type,
  value
}) {
  return (
    <button
      className="button"
      onClick={onClick}
      type={type}
      value={value}
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

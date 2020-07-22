import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import "../Button/Button.scss";
import "./Link.scss";

function Link(props) {
  const { children, className, buttonLike } = props;
  const classNames = ["link"];
  if (buttonLike) classNames.push("button");
  if (!!className) classNames.push(className);
  
  return (
    <ReactRouterLink
      {...props}
      className={classNames.join(" ")}
    >
      {children}
    </ReactRouterLink>
  );
}

export default Link;

import React, { useState } from 'react';
import { Button, Form, TextInput } from '../../components';
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const fields = {
    email: {
      placeholder: "Email",
      onChange: function(value) {
        setEmail(value);
      },
      value: email
    },
    password: {
      placeholder: "Password",
      onChange: function(value) {
        setPassword(value);
      },
      value: password
    },
    confirmedPassword: {
      placeholder: "Confirm Password",
      onChange: function(value) {
        setConfirmedPassword(value);
      },
      value: confirmedPassword
    },
  }

  function handleSubmit() {
    console.log(email, password, confirmedPassword);
  }

  function handleToggle() {
    setShowSignUp(!showSignUp);
  }

  const fieldTypes = ["email", "password"];
  if (showSignUp) fieldTypes.push("confirmedPassword");

  return (
    <div className="login">
      <h1 className="login__heading">BudKey</h1>
      <Form className="login__form" onSubmit={handleSubmit}>
        {fieldTypes.map(fieldType => (
          <TextInput key={fieldType} {...fields[fieldType]} />
        ))}
        <Button className="login__button --submit">
          Login
        </Button>
        <Button
          className="login__button --toggle"
          onClick={handleToggle}
          type="button"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Login;

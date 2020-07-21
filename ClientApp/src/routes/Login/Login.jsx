import React from 'react';
import { Button, Form, TextInput } from '../../components';
import "./Login.scss";

function Login() {
  function handleSubmit() {
    alert("Logging in . . .");
  }

  return (
    <div className="login">
      <h1 className="login__heading">BudKey</h1>
      <Form className="login__form" onSubmit={handleSubmit}>
        <TextInput
          className="login__input"
          placeholder="Email"
        />
        <TextInput
          className="login__input"
          placeholder="Password"
        />
        <Button className="login__button submit">
          Login
        </Button>
        <Button className="login__button create" type="button">
          Create Account
        </Button>
      </Form>
    </div>
  );
}

export default Login;

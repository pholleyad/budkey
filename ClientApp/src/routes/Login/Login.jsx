import React from 'react';
import { Button, Form, TextInput } from '../../components';
import "./Login.scss";

function Login() {
  function handleSubmit() {
    alert("Logging in . . .");
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <TextInput />
        <TextInput />
        <div className="login__button--submit">
          <Button>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

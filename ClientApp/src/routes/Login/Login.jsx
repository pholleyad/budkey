import React from 'react';
import { Button, Form, Link, TextInput } from '../../components';
import "../../styles/shared.scss";
import "./Login.scss";

function Login() {
  function handleSubmit() {
    alert("Logging in . . .");
  }

  return (
    <div className="account">
      <h1 className="account__heading">BudKey</h1>
      <Form className="account__form" onSubmit={handleSubmit}>
        <TextInput
          placeholder="Email"
        />
        <TextInput
          placeholder="Password"
        />
        <Button className="account__button --submit">
          Login
        </Button>
        <Link
          className="account__button --toggle"
          buttonLike
          to="/signup"
        >
          Sign Up
        </Link>
      </Form>
    </div>
  );
}

export default Login;

import React from 'react';
import { Button, Form, Link, TextInput } from '../../components';
import "./SignUp.scss";

function SignUp() {
  function handleSubmit() {
    alert("Logging in . . .");
  }

  return (
    <div className="account">
      <h4 className="account__heading --sub">BudKey</h4>
      <h2 className="account__heading">Sign Up</h2>
      <Form className="account__form" onSubmit={handleSubmit}>
        <TextInput
          placeholder="Email"
        />
        <TextInput
          placeholder="Password"
        />
        <TextInput
          placeholder="Confirm Password"
        />
        <Button className="account__button --submit">
          Create Account
        </Button>
        <Link
          className="account__button --toggle"
          buttonLike
          to="/login"
        >
          Back to Login
        </Link>
      </Form>
    </div>
  );
}

export default SignUp;

import React from "react";
import { Button, Form } from "semantic-ui-react";

const Login = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;

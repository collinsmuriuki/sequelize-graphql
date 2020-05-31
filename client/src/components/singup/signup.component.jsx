import React from "react";
import { Form, Button } from "semantic-ui-react";

const SignUp = () => {
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUp;

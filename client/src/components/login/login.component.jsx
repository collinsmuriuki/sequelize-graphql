import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Button, Form, Message } from "semantic-ui-react";

const LOGIN = gql`
  mutation($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

const SET_CURRENT_USER = gql`
  mutation($user: LoginOutput!) {
    setCurrentUser(user: $user) @client
  }
`;

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState(false);

  const [setCurrentUser] = useMutation(SET_CURRENT_USER);

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      setCurrentUser({ variables: { user: login.user } });
      history.push("/");
    },
    onError({ error }) {
      setFormError(true);
    },
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      login({ variables: { data: credentials } });
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formError && (
        <Message negative>
          <p>{error ? error.toString() : "Wrong email or password"}</p>
        </Message>
      )}
      <Form.Field>
        <label>Email</label>
        <input
          onChange={handleChange}
          placeholder="First Name"
          name="email"
          value={credentials.email}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
        />
      </Form.Field>
      <Button loading={loading ? true : false} type="submit">
        Login
      </Button>
    </Form>
  );
};

export default withRouter(Login);

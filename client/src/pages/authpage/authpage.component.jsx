import React from "react";
import { Grid } from "semantic-ui-react";

import SignUp from "../../components/singup/signup.component";
import Login from "../../components/login/login.component";
import Hero from "../../components/hero/hero.component";

const AuthPage = () => {
  return (
    <>
      <Hero icon="user" headerMessage="Login/ Sign Up" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Login />
          </Grid.Column>
          <Grid.Column width={8}>
            <SignUp />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default AuthPage;

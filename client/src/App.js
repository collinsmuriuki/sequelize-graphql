import React from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

import { default as Navbar } from "./components/navbar/navbar.container";
import HomePage from "./pages/homepage/homepage.component";
import SinglePost from "./pages/singlepost/singlepost.component";
import AuthPage from "./pages/authpage/authpage.component";

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:postId" component={SinglePost} />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </Container>
  );
}

export default App;

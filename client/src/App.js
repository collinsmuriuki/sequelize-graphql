import React from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

import { default as Navbar } from "./components/navbar/navbar.container";
import HomePage from "./pages/homepage/homepage.component"

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  );
}

export default App;

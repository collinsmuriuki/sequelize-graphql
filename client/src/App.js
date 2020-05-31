import React from "react";
import { Container } from "semantic-ui-react";

import { default as Navbar } from "./components/navbar/navbar.container";

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./graphql/config";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

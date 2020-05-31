import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-boost";
import { setContext } from "apollo-link-context";

import { resolvers } from "./resolvers";

const httpLink = createHttpLink({
  uri: "http://localhost:4002",
});

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers,
});

client.writeData({
  data: {
    currentUser: null,
  },
});

export default client;

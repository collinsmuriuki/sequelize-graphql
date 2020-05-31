import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-boost";

const httpLink = createHttpLink({
  uri: "http://localhost:4002",
});

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

client.writeData({
  data: {
    currentUser: null,
  },
});

export default client;

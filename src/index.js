import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers/index";
import { sequelize } from "../models";

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully to Postgres");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (req) => ({
    ...req,
    sequelize: sequelize.models,
  }),
});

server.start({ port: 4002 }, () => {
  console.log("Server is running on port 4002");
});

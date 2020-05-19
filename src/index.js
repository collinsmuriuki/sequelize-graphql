import { GraphQLServer } from "graphql-yoga";
import jwt from "express-jwt";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import resolvers from "./resolvers/index";
import { sequelize } from "../models";

dotenv.config({
  path: ".env",
});

const authMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

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
    req: req.request,
    sequelize: sequelize.models,
  }),
});

if (process.env.NODE_ENV === "development") server.express.use(morgan("tiny"));

server.express.use(authMiddleware);
server.express.use(bodyParser.json());
server.express.use(cors());

server.start({ port: 4002 }, () => {
  console.log("Server is running on port 4002");
});

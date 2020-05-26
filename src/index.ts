import { GraphQLServer } from "graphql-yoga";
import jwt from "express-jwt";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import schema from "./schema";
import { sequelize } from "../models";

dotenv.config({
  path: ".env",
});

const port: number | any = process.env.PORT || 4002;

const authMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully to Postgres");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });

const server = new GraphQLServer({
  schema,
  context: (req) => ({
    req: req.request,
    sequelize: sequelize.models,
  }),
});

// middleware
server.express.use(authMiddleware);

server.start({ port }, () => {
  console.log(`Server is running: http://localhost:${port}`);
});

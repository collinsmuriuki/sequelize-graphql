import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers/index";
import * as schema from "./schema.graphql";

export default makeExecutableSchema({
  typeDefs: [schema],
  resolvers,
});

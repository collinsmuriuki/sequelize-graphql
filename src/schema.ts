import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers/index";
// @ts-ignore
import * as schema from "./schema.graphql";

export default makeExecutableSchema({
    typeDefs: [schema],
    resolvers
})
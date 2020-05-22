import RootQueries from "./root-query";
import RootMutations from "./root-mutation";

const resolvers = {
  Query: {
    ...RootQueries,
  },

  Mutation: {
    ...RootMutations,
  },
};

export default resolvers;

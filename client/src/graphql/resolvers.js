import { gql } from "apollo-boost";

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

export const resolvers = {
  Mutation: {
    setCurrentUser: async (_parent, { user }, { cache }) => {
      const { currentUser } = cache.readQuery({
        query: GET_CURRENT_USER,
      });

      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user },
      });

      return currentUser;
    },
  },
};

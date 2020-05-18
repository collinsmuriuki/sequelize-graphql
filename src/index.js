import { GraphQLServer } from "graphql-yoga";

import { sequelize } from "../models";

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully to Postgres");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const resolvers = {
  Query: {
    posts: async (parent, args, { sequelize: { Post } }) => {
      const posts = await Post.findAll({ include: [{ all: true }] });
      return posts;
    },

    users: async (parent, { limit, offset, order }, { sequelize: { User } }) => {
      let users;

      if (order) {
        users = await User.findAll({
          include: [{ all: true }],
          limit, offset,
          order: [["createdAt", order]],
        });
      } else {
        users = await User.findAll({
          include: [{ all: true }],
          limit, offset,
        });
      }

      return users;
    },

    getPostById: async (parent, { id }, { sequelize: { Post } }) => {
      const post = await Post.findOne({
        where: {
          id,
        },
        include: [{ all: true }],
      });
      return post;
    },
  },

  Mutation: {
    createUser: async (parent, { data }, { sequelize: { User } }) => {
      const user = await User.create({ ...data });
      return user;
    },

    createPost: async (parent, { UserId, data }, { sequelize: { Post } }) => {
      const post = await Post.create({
        UserId,
        ...data,
      });
      return post;
    },
  },
};

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

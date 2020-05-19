export default {
  posts: async (parent, args, { sequelize: { Post } }) => {
    const posts = await Post.findAll({ include: [{ all: true }] });
    return posts;
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
};

export default {
  posts: async (parent, { limit, offset, order }, { sequelize }) => {
    const { Post } = sequelize;
    let posts;
    try {
      if (order) {
        posts = await Post.findAll({
          include: [{ all: true, nested: true }],
          limit,
          offset,
          order: [["createdAt", order]],
        });
      } else {
        posts = await Post.findAll({
          include: [{ all: true, nested: true }],
          limit,
          offset,
        });
      }
      return posts;
    } catch (error) {
      throw new Error(error.toString());
    }
  },

  getPostById: async (parent, { id }, { sequelize: { Post } }) => {
    try {
      const post = await Post.findOne({
        where: {
          id,
        },
        include: [{ all: true, nested: true }],
      });
      return post;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

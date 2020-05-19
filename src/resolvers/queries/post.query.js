export default {
  posts: async (parent, { limit, offset, order }, { sequelize }) => {
      const { Post } = sequelize;
    let posts;

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

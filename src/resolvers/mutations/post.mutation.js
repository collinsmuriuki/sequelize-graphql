export default {
  createPost: async (parent, { UserId, data }, { sequelize: { Post } }) => {
    const post = await Post.create({
      UserId,
      ...data,
    });
    return post;
  },
};

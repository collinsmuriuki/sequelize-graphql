export default {
  createPost: async (parent, { data }, { sequelize: { Post } }) => {
    const post = await Post.create({
      ...data,
    });
    return post;
  },
};

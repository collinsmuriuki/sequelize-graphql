export default {
  createPost: async (parent, { data }, { sequelize: { Post }, req }) => {
    if (!req.user) throw new Error("Unauthorized");
    const post = await Post.create({
      ...data,
    });
    return post;
  },
};

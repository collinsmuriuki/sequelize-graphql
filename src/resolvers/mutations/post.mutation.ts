export default {
  createPost: async (parent, { data }, { sequelize: { Post }, req }) => {
    if (!req.user || req.user.id !== data.UserId)
      throw new Error("Unauthorized");
    try {
      const post = await Post.create({
        ...data,
      });
      const result = await Post.findOne({
        where: {
          id: post.id,
        },
        include: [{ all: true }],
      });
      return result;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

import createError from "http-errors";

export default {
  createPost: async (_parent, { data }, { sequelize: { Post }, req }) => {
    if (!req.user || req.user.id !== data.userId)
      throw createError(401, "You are not authorized to perform this task");
    try {
      const post = await Post.create({
        ...data,
      });
      const result: {} = await Post.findOne({
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

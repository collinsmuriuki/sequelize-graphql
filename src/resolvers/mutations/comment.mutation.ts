import createError from "http-errors";

export default {
  createComment: async (_parent, { data }, { sequelize, req }) => {
    const { Comment } = sequelize;
    if (!req.user || req.user.id !== data.userId)
      throw createError(401, "You are not authorized to perform this task");
    try {
      const comment = await Comment.create({
        ...data,
      });
      const result: {} = await Comment.findOne({
        where: {
          id: comment.id,
        },
        include: [{ all: true }],
      });
      return result;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

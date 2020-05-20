export default {
  createComment: async (parent, { data }, { sequelize, req }) => {
    const { Comment } = sequelize;
    if (!req.user ||req.user.id !== data.UserId) throw new Error("Unauthorized");
    const comment = await Comment.create({
      ...data,
    });
    const result = await Comment.findOne({
      where: {
        id: comment.id,
      },
      include: [{ all: true }],
    });
    return result;
  },
};

export default {
  comments: async (_parent, _args, { sequelize: { Comment }, req }) => {
    try {
      const comments = await Comment.findAll({ include: [{ all: true }] });
      return comments;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

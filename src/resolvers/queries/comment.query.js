export default {
  comments: async (parent, args, { sequelize: { Comment }, req }, info) => {
    const comments = Comment.findAll({ include: [{ all: true }] });
    return comments;
  },
};

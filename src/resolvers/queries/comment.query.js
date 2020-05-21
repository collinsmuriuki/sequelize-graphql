export default {
  comments: async (parent, args, { sequelize: { Comment }, req }, info) => {
    try {
      const comments = await Comment.findAll({ include: [{ all: true }] });
      return comments; 
    } catch(error) {
      throw new Error(error.toString())
    }
  },
};

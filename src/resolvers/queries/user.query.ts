export default {
  users: async (_parent, { limit, offset, order }, { sequelize: { User } }) => {
    let users;
    try {
      if (order) {
        users = await User.findAll({
          include: [{ all: true, nested: true }],
          limit,
          offset,
          order: [["createdAt", order]],
        });
      } else {
        users = await User.findAll({
          include: [{ all: true, nested: true }],
          limit,
          offset,
        });
      }
      return users;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

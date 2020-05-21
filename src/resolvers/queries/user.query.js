export default {
  users: async (parent, { limit, offset, order }, { sequelize: { User } }) => {
    let users;
    try {
      if (order) {
        users = await User.findAll({
          include: [{ all: true }],
          limit,
          offset,
          order: [["createdAt", order]],
        });
      } else {
        users = await User.findAll({
          include: [{ all: true }],
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

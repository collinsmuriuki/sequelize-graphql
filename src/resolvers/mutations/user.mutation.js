export default {
  signUp: async (parent, { data }, { sequelize: { User } }) => {
    const user = await User.create({ ...data });
    return user;
  },
};

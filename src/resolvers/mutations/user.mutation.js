import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  signUp: async (parent, { data }, { sequelize: { User } }) => {
    const { firstName, lastName, email, password } = data;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      return user;
    } catch (error) {
      throw new Error(error.toString());
    }
  },

  login: async (parent, { data }, { sequelize: { User } }) => {
    const { email, password } = data;
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) throw new Error("Wrong email or password");

      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        const token = jwt.sign(
          {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          process.env.JWT_SECRET
        );

        return { token, user };
      } else {
        throw new Error("Wrong password");
      }
    } catch (error) {
      throw new Error(error.toString());
    }
  },

  updateUserProfile: async (parent, { data }, { sequelize, req }) => {
    const { firstName, lastName, email, userId } = data;
    const { User } = sequelize;
    if (!req.user || req.user.id != userId) throw new Error("Unauthorized");
    try {
      const userInstance = await User.findByPk(userId);
      userInstance.firstName = firstName;
      userInstance.lastName = lastName;
      userInstance.email = email;
      await userInstance.save();
      const user = await User.findOne({
        where: {
          id: userId,
        },
        include: [{ all: true, nested: true }],
      });
      return user;
    } catch (error) {
      throw new Error(error.toString());
    }
  },

  changePassword: async (parent, { data }, { sequelize, req }) => {
    const { oldPassword, newPassword, userId } = data;
    const { User } = sequelize;
    if (!req.user || req.user.id != userId) throw new Error("Unauthorized");
    try {
      // get user instance from id
      const userInstance = await User.findByPk(userId);
      // compare hash
      const valid = await bcrypt.compare(oldPassword, userInstance.password);
      // throw if old password is incorrect
      if (!valid) throw new Error("Old password does not match!");
      // store new hash
      userInstance.password = await bcrypt.hash(newPassword, 10);
      await userInstance.save();
      const user = await User.findOne({
        where: {
          id: userId,
        },
        include: [{ all: true, nested: true }],
      });
      return user;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
};

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
      throw new Error(error);
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
      throw new Error(error);
    }
  },
};

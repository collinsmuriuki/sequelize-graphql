'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Post, {as: 'posts', foreignKey: 'userId'})
    models.User.hasMany(models.Comment, {as: 'comments', foreignKey: 'userId'})
  };
  return User;
};
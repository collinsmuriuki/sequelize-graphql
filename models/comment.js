'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    models.Comment.belongsTo(models.Post, { as: 'post' })
    models.Comment.belongsTo(models.User, { as: 'user' })
  };
  return Comment;
};
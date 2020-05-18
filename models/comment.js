'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    name: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    models.Comment.belongsTo(models.Post)
    models.Comment.belongsTo(models.User)
  };
  return Comment;
};
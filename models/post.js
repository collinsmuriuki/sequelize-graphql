'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    models.Post.belongsTo(models.User, { as: 'user' })
    models.Post.hasMany(models.Comment, {as: 'comments', foreignKey: 'postId'})
  };
  return Post;
};
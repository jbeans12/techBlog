const Users = require('./users');
const Post = require('./post');

Post.belongsTo(Users, {
    foreignKey: 'post_id'
})

Users.hasMany(Post, {
    foreignKey: 'post_id'
})



module.exports = { Users, Post };
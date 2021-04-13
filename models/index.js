const Users = require('./users');
const Post = require('./post');

Post.belongsTo(Users, {
    // foreignKey: 'post_id'
})

Users.hasMany(Post, {
    foreignKey: 'users_id'
})



module.exports = { Users, Post };
const sequelize = require('../config/connection');
const { Users, Post } = require('../models');
const userData = require('./user.json')

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

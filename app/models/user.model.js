module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    userId: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DECIMAL(10, 2),
    },
  });

  return User;
};

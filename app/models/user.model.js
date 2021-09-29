module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    //! TODO: implement userId
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};

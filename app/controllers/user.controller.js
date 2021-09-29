const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to landing page.");
};

exports.userWallet = (req, res) => {
  res.status(200).send("This is your wallet page.");
};

exports.getUserWallet = (req, res) => {
  User.findOne({
    where: {
      userId: req.body.userId,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      } else {
        res.status(200).send({
          userId: user.userId,
          username: user.username,
          email: user.email,
          value: user.value,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

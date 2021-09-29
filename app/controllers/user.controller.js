exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to landing page.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("This is your user homepage.");
};

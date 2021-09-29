exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to landing page.");
};

exports.userWallet = (req, res) => {
  res.status(200).send("This is your wallet page.");
};

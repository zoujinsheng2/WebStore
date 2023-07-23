module.exports = (req, res, next) => {
  if (!req.session.username) {
    return res.status(403).send("/login");
  }
  next();
};

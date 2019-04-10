module.exports = async (req, res, next) => {
  req.params = {
    ...req.params,
    ...req.query,
    ...req.body,
  };

  await next();
};

const isExist = (model) => {
  return (req, res, next) => {
    if (model) {
      return next();
    }
    res.status(404).json({ success: false, msg: `Does not exist with id` });
  };
};

module.exports = isExist;

module.exports = {
  middleware1: function (req, res, next) {
    if (req.params.id === "2") {
      res.send("your paramter is 2");
    } else {
      next();
    }
  },
};

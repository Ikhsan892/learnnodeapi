var express = require("express");
var router = express.Router();
var Middleware = require("../middleware/routeMiddleware");

const afterMiddleware = function (req, res) {
  res.send(req.params.id);
};

/* GET home page. */

router.get("/:id", Middleware.middleware1, afterMiddleware);

module.exports = router;

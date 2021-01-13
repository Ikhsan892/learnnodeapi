"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("This is get from /");
});
app.get("/test", function (req, res) {
  res.send("test2");
});
app.listen(8009, function () {
  console.log("Server Started");
});
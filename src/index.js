import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is get from /");
});
app.get("/test", (req, res) => {
  res.send("test2");
});

app.listen(8009, () => {
  console.log("Server Started");
});

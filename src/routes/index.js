const router = require("express").Router();
router.use("/api/v1/", require("./api/v1"));
router.get("/", (req, res, next) =>
  res.send({ message: "Estamos workando!!!" })
);

module.exports = router;

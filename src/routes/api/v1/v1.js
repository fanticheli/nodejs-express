const router = require("express").Router();

router.use("/healthCheck", require("./healthCheckRoute"));

module.exports = router;

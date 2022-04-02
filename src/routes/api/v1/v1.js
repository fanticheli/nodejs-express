const router = require("express").Router();

// ROTAS
const healthCheckRoute = require("./healthCheckRoute");
const userRoute = require("./userRoute");

router.use("/healthCheck", healthCheckRoute);
router.use("/user", userRoute);

module.exports = router;

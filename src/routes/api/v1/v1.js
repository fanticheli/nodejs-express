const router = require("express").Router();

// ROTAS
const healthCheckRoute = require("./healthCheckRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");

router.use("/healthCheck", healthCheckRoute);
router.use("/user", userRoute);
router.use("/login", loginRoute);

module.exports = router;

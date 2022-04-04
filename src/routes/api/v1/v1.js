const router = require("express").Router();

// ROTAS
const healthCheckRoute = require("./healthCheckRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const productExternalRoute = require("./productExternalRoute");
const productInternalRoute = require("./productInternalRoute");

router.use("/healthCheck", healthCheckRoute);
router.use("/user", userRoute);
router.use("/login", loginRoute);
router.use("/product-external", productExternalRoute);
router.use("/product-internal", productInternalRoute);

module.exports = router;

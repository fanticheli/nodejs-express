const os = require("os");
const ip = require("ip");
const hostname = os.hostname();

class HealthCheckController {
  contructor() {}

  async healthCheck(req, res) {
    return res.status(200).json({
      message: "Estamos workando!!!",
      hostname,
      ip: ip.address(),
    });
  }
}

module.exports = new HealthCheckController();

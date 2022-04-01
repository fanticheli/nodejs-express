const os = require("os");
const ip = require("ip");
const hostname = os.hostname();

class HealthCheckController {
  contructor() {}

  async healthCheck(req, res) {
    try {
      const response = {
        message: "Estamos workando!!!",
        hostname,
        ip: ip.address(),
      };
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new HealthCheckController();

var os = require("os");
var ip = require("ip");
var hostname = os.hostname();

const healthCheck = async (req, res) => {
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
};

module.exports = {
  healthCheck,
};

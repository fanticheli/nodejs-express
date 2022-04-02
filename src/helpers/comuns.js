const bcrypt = require("bcryptjs");

class Comuns {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const encryptPassword = await bcrypt.hash(password, salt);
    return encryptPassword;
  }
}

module.exports = Comuns;

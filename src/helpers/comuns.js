const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class Comuns {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const encryptPassword = await bcrypt.hash(password, salt);
    return encryptPassword;
  }

  static async comparePassword(password, passwordDataBase) {
    return await bcrypt.compare(password, passwordDataBase);
  }

  static async generateToken(tokenRequest) {
    const secretKey = process.env.SECRET_KEY_JWT;
    const expirationTime = process.env.TOKEN_EXPIRATION_TIME;
    return jwt.sign({ payloadRequest: tokenRequest }, secretKey, {
      expiresIn: expirationTime,
    });
  }
}

module.exports = Comuns;

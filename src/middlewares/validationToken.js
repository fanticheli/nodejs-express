const jwt = require("jsonwebtoken");
const constantMessages = require("./../helpers/constantMessages");

class ValidationToken {
  async validateToken(req, res, next) {
    try {
      const { token } = req.headers;

      if (!token)
        return res
          .status(400)
          .json({ message: constantMessages.TOKEN_NOT_FOUND });

      const secretKey = process.env.SECRET_KEY_JWT;
      const uncodeToken = await jwt.verify(token, secretKey);
      req.user = uncodeToken;
    } catch (error) {
      return res.status(400).json({ message: constantMessages.TOKEN_INVALID });
    }
    next();
  }
}
module.exports = new ValidationToken();

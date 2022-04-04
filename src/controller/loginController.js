const UserService = require("./../service/userService");

const service = new UserService();

class LoginController {
  async login(req, res) {
    try {
      const token = await service.validateUserAccess(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new LoginController();

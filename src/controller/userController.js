const UserService = require("./../service/userService");
const service = new UserService();

class UserController {
  async createUser(req, res) {
    try {
      const restul = await service.createUser(req.body);
      return res.status(200).json(restul);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new UserController();

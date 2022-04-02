const UserModel = require("./../model/user");
const UserRepository = require("./../repository/userRepository");
const repository = new UserRepository(UserModel);
const Comuns = require("../helpers/comuns");

class UserService {
  async createUser(model) {
    try {
      if (!model.userName) {
        throw "Nome do usuário inválido.";
      }

      if (!model.secretKey) {
        throw "Senha do usuário inválida.";
      }

      model.secretKey = await Comuns.encryptPassword(model.secretKey);

      return await repository.create(model);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

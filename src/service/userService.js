const UserModel = require("./../model/user");
const UserRepository = require("./../repository/userRepository");
const repository = new UserRepository(UserModel);
const Comuns = require("../helpers/comuns");
const ConstantMessages = require("../helpers/constant-messages");

class UserService {
  async createUser(user) {
    try {
      if (!this.propertyUserValid(user.userName))
        throw ConstantMessages.NAME_USER_INVALID;
      if (!this.propertyUserValid(user.secretKey))
        throw ConstantMessages.PASSWORD_USER_INVALID;

      user.secretKey = await Comuns.encryptPassword(user.secretKey);

      return await repository.create(user);
    } catch (error) {
      throw error;
    }
  }

  async validateUserAccess(user) {
    try {
      if (!this.propertyUserValid(user.secretKey))
        throw ConstantMessages.PASSWORD_USER_INVALID;

      const userDataBase = await this.findUserByUserName(user.userName);

      if (!userDataBase) throw ConstantMessages.USER_NOT_FOUND;

      const passwordValid = await Comuns.comparePassword(
        user.secretKey,
        userDataBase.secretKey
      );

      if (!passwordValid) throw ConstantMessages.PASSWORD_USER_INVALID;

      const tokeResquest = {
        userName: userDataBase.userName,
        id: userDataBase._id,
      };

      const token = await Comuns.generateToken(tokeResquest);

      return token;
    } catch (error) {
      throw error;
    }
  }

  async findUserByUserName(userName) {
    try {
      if (!this.propertyUserValid(userName)) {
        throw ConstantMessages.NAME_USER_INVALID;
      }

      return await repository.findUserByUserName(userName);
    } catch (error) {
      throw error;
    }
  }

  propertyUserValid(property) {
    return !!property;
  }
}

module.exports = UserService;

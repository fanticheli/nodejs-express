const BaseRepository = require("./base/baseRepository");

class UserRepository extends BaseRepository {
  constructor(baseModel) {
    super(baseModel);
  }

  async findUserByUserName(userName) {
    try {
      return await this.baseModel.findOne({ userName });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;

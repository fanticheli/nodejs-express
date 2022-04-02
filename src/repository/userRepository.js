const BaseRepository = require("./base/baseRepository");

class UserRepository extends BaseRepository {
  constructor(baseModel) {
    super(baseModel);
  }
}

module.exports = UserRepository;

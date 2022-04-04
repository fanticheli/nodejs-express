const BaseRepository = require("./base/baseRepository");

class ProductRepository extends BaseRepository {
  constructor(baseModel) {
    super(baseModel);
  }
}

module.exports = ProductRepository;

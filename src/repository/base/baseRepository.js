class BaseRepository {
  constructor(baseModel) {
    this.baseModel = baseModel;
  }

  async create(model) {
    try {
      return await this.baseModel.create(model);
    } catch (error) {
      throw `Erro ao criar ${this.baseModel.modelName}`;
    }
  }
}

module.exports = BaseRepository;

class ValidationModel {
  static propertyValid(property) {
    return !!property;
  }

  static propertyArrayValid(property) {
    return !!property?.length > 0;
  }
}

module.exports = ValidationModel;

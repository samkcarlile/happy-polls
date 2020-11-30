const db = require('./');

/**
 * Create a database model
 *
 * @param {string} collectionName
 * @param {import("joi").Schema} schema
 */
function model(collectionName, schema) {
  db.defaults({ [collectionName]: [] }).write();

  return {
    create(data) {
      const { value, error } = schema.validate(data);
      if (error) throw error;

      return db.get(collectionName).castArray().push(value).last().write();
    },

    async updateOne(query, data) {
      const object = db.get(collectionName).castArray().find(query).value();
      Object.assign(object, data);

      const { value, error } = schema.validate(object);
      if (error) throw error;

      return db
        .get(collectionName)
        .castArray()
        .find(query)
        .toPlainObject()
        .assign(value)
        .write();
    },

    async findOneAndUpdate(query, data) {},

    async findOne(query) {
      return db.get(collectionName).castArray().find(query).value();
    },

    async deleteOne(query) {},
  };
}

module.exports = model;

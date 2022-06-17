const Sequelize = require('sequelize');

module.exports = class Book extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      img: {
        type: Sequelize.BLOB,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
};
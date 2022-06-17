const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      email: { 
        type: Sequelize.STRING(30),
        uniquie: true
      },
      username: {
        type: Sequelize.STRING(15),
        unique: false,
      },
      password: {
        type: Sequelize.STRING(400),
        allowNull: true,
      },
      birth_year: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      gender: {
        type: Sequelize.BOOLEAN(),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    // db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
  }
};
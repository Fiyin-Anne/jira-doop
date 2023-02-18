'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Ticket, {
        foreignKey: 'userId',
        as: 'tickets'
      });

      User.hasOne(models.Auth, {
        foreignKey: 'userId',
      });
  
      User.hasMany(models.Subticket, {
        foreignKey: 'userId',
        as: 'subtickets'
      });

      User.belongsTo(models.Team, {
        foreignKey: {
          name: 'teamId'
        }
      })
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    role: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
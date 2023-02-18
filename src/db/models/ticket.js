'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner',
      })

      Ticket.hasMany(models.Subticket, {
        foreignKey: 'taskId',
      })
    }
  }
  Ticket.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    assigner: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    approver: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};
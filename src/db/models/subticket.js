'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subticket.belongsTo(models.Ticket);
    }
  }
  Subticket.init({
    title: DataTypes.STRING,
    ticketId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    assigner: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    approver: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Subticket',
  });
  return Subticket;
};
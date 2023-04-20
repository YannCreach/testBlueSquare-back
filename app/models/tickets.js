const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Ticket extends Model {}

Ticket.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
  },
  context: {
    type: DataTypes.STRING(255)
  },
  link: {
    type: DataTypes.STRING(255),
  },
  browser: {
    type: DataTypes.STRING(50),
  },
  os: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'tickets',
});

module.exports = Ticket;

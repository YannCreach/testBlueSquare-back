const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Projects extends Model {}

Projects.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'projects',
});

module.exports = Projects;

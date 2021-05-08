const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      
      allowNull: false,

    },

    message: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    date_time: {
        type: DataTypes.DATETIME,
        allowNull: false,
        unique: true,
    }

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Message;
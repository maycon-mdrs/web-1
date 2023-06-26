const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    logopath: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    button_color: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    text_color: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    background_color: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    button_colorOver: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

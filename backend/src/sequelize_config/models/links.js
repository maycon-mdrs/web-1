const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('links', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    icon_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_link',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'links',
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
      {
        name: "tipo_fk_idx",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
    ]
  });
};

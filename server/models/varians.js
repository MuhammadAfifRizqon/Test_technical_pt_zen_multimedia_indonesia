const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('varians', {
    id_varians: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id_product'
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_varians: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'varians',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "varians_pkey",
        unique: true,
        fields: [
          { name: "id_varians" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_categories', {
    id_product_category: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_product_category: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_categories_pkey",
        unique: true,
        fields: [
          { name: "id_product_category" },
        ]
      },
    ]
  });
};

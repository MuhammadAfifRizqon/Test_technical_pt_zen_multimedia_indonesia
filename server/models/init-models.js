import Sequelize  from "sequelize";
import config from "../../config/config"

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect : 'postgres',
    pool : {
      max : 5,
      min : 0,
      acquire : 30000,
      idle : 10000
    }
  }
)

var DataTypes = require("sequelize").DataTypes;
var _products = require("./products");
var _products_categories = require("./products_categories");
var _users = require("./users");
var _varians = require("./varians");

function initModels(sequelize) {
  var products = _products(sequelize, DataTypes);
  var products_categories = _products_categories(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var varians = _varians(sequelize, DataTypes);

  varians.belongsTo(products, { as: "id_varians_product", foreignKey: "id_varians"});
  products.hasOne(varians, { as: "varian", foreignKey: "id_varians"});
  products.belongsTo(products_categories, { as: "id_product_products_category", foreignKey: "id_product"});
  products_categories.hasOne(products, { as: "product", foreignKey: "id_product"});

  return {
    products,
    products_categories,
    users,
    varians,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize };

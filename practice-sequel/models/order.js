"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, OrderItem }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
      this.belongsToMany(Product, {
        foreignKey: "orderId",
        through: OrderItem,
        as: "products",
      });
    }
  }
  Order.init(
    {},
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );
  return Order;
};

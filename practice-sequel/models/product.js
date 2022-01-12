"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Cart, CartItem, Order, OrderItem }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: "userId",
        constraints: true,
        onDelete: "CASCADE",
        as: "user",
      });
      this.belongsToMany(Cart, {
        foreignKey: "productId",
        through: CartItem,
        as: "carts",
      });
      this.belongsToMany(Order, {
        foreignKey: "productId",
        through: OrderItem,
        as: "orders",
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      imageUrl: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};

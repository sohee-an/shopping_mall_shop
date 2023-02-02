const { model } = require("mongoose");
const CartSchema = require("../schemas/Cart");

const Cart = model("cart", CartSchema);

class CartModel {
  async saveCart(userInfoCart) {
    const saveCart = await Cart.create(userInfoCart);

    return saveCart;
  }
  //update
  async updateCart(userId, updateCart) {
    const updatedCart = await Cart.update(
      { userId: userId },
      { $set: { products: updateCart } },
      { new: true }
    );
    return updatedCart;
  }
  //delete
  async delete(userId) {
    const deletedCart = await Cart.deleteOne({ userId: userId });
    return deletedCart;
  }
  //get user cart
  async getCart(userId) {
    const getCart = await Cart.findOne({ userId: userId }).populate(
      "products.product"
    );

    return getCart;
  }
  //get all carts
  async findAllCarts() {
    const allCarts = await Cart.find();
    return allCarts;
  }
}

const cartModel = new CartModel();

module.exports = cartModel;

const { model } = require("mongoose");
const CartSchema = require("../schemas/Cart");

const Cart = model("cart", CartSchema);

class CartModel {
  async saveCart(userInfoCart) {
    const saveCart = await Cart.create(userInfoCart);

    return saveCart;
  }
  //update
  async updateCart(cartId, updateCart) {
    const updatedCart = await Cart.findByIdAndUpdate(
      cartId,
      { $set: updateCart },
      { new: true }
    );
    return updatedCart;
  }
  //delete
  async delete(cartId) {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    return deletedCart;
  }
  //get user cart
  async getCart(cartId) {
    const getCart = await Cart.findOne({ userId: cartId });
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

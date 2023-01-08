const cartModel = require("../db/models/cartModel");
const CryptoJS = require("crypto-js");

class CartService {
  constructor(cartModel) {
    this.cartModel = cartModel;
  }
  //create
  async saveCart(userInfoCart) {
    const saveCart = await this.cartModel.saveCart(userInfoCart);
    return saveCart;
  }
  //update
  async updateCart(cartId, updateCart) {
    const updatedCart = await this.cartModel.updateCart(cartId, updateCart);
    return updatedCart;
  }

  //delete id로
  async deletCart(cartId) {
    const deleteCart = await this.cartModel.delete(cartId);
    return deleteCart;
  }

  //get user cart
  async getCart(cartId) {
    const getCart = await this.cartModel.getCart(cartId);
    return getCart;
  }
  //get all cart
  async findAllCarts() {
    const allCarts = await this.cartModel.findAllCarts();
    return allCarts;
  }
}
const cartService = new CartService(cartModel);

module.exports = cartService;

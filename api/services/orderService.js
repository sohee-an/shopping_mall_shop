const orderModel = require("../db/models/orderModel");
const CryptoJS = require("crypto-js");

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }
  //create
  async saveOrder(userInfoOrder) {
    const saveOrder = await this.orderModel.saveOrder(userInfoOrder);
    return saveOrder;
  }
  //update
  async updateOrder(orderId, updateOrder) {
    const updatedOrder = await this.orderModel.updateOrder(
      orderId,
      updateOrder
    );
    return updatedOrder;
  }

  //delete id로
  async deletOrder(orderId) {
    const deleteOrder = await this.orderModel.delete(orderId);
    return deleteOrder;
  }

  //get user cart
  async getOrders(orderId) {
    const getOrders = await this.orderModel.getOrders(orderId);
    return getOrders;
  }
  //get all order
  async findAllOrders() {
    const allOrders = await this.orderModel.findAllOrders();
    return allOrders;
  }
  async findStatsOrder(previousMonth) {
    const incomeOrders = await this.orderModel.findStatsOrder(previousMonth);
    return incomeOrders;
  }
}
const orderService = new OrderService(orderModel);

module.exports = orderService;

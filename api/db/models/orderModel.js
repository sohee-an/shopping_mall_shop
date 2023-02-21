const { model } = require("mongoose");
const OrderSchema = require("../schemas/Order");

const Order = model("order", OrderSchema);

class OrderModel {
  async saveOrder(userInfoOrder) {
    const saveOrder = await Order.create(userInfoOrder);

    return saveOrder;
  }
  //update
  async updateOrder(orderId, updateOrder) {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: updateOrder },
      { new: true }
    );
    return updatedOrder;
  }
  //delete
  async delete(orderId) {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    return deletedOrder;
  }
  //get user order
  async getOrders(orderId) {
    const getOrders = await Order.find({ userId: orderId });
    return getOrders;
  }
  //get all orders
  async findAllOrders() {
    const allOrders = await Order.find();
    return allOrders;
  }
  //
  async findStatsOrder(previousMonth, productId) {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    return income;
  }
}

const orderModel = new OrderModel();

module.exports = orderModel;

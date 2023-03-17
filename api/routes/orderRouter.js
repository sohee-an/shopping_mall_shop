const orderRouter = require("express").Router();
const orderService = require("../services/orderService");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

// order creates
orderRouter.post("/", verifyToken, async (req, res) => {
  console.log(req.body);

  try {
    const saveOrder = await orderService.saveOrder(req.body);
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// order update//admin만
orderRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await orderService.updateOrder(req.params.id, req.body);
    res.status(201).json(updateOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// order delete
orderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedOrder = await orderService.deletOrder(req.params.id);
    if (deletedOrder) {
      res.status(201).json("주문이 취소되었습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user orders
orderRouter.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      const getOrders = await orderService.getOrders(req.params.userId);
      res.status(201).json(getOrders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// get all orders
orderRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allOrders = await orderService.findAllOrders();

    res.status(201).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get monthly incone
orderRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.productId;
  const date = new Date();
  //이번 달과 이 이전 달 수입
  // const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  // const previousMonth = new Date(date.setMonth(date.getMonth() - 2));

  // console.log("last", lastMonth);
  // console.log("prev", previousMonth);
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await orderService.findStatsOrder(previousMonth, productId);
    console.log("income", income);

    res.status(201).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = orderRouter;

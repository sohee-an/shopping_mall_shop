const cartRouter = require("express").Router();
const cartService = require("../services/cartService");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

// cart creates
cartRouter.post("/", verifyToken, async (req, res) => {
  try {
    const saveCart = await cartService.saveCart(req.body);

    res.status(200).json(saveCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// cart update
cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCart = await cartService.updateCart(req.params.id, req.body);
    res.status(201).json("장바구니에 성공적으로 들어갔습니다.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// cart delete
cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedCart = await cartService.deletCart(req.params.id);
    if (deletedCart) {
      res.status(201).json("장바구니가 삭제되었습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user cart
cartRouter.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getCart = await cartService.getCart(req.params.id);

    if (getCart === null) {
      res.status(201).json([]);
    } else {
      res.status(201).json(getCart);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all product
cartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allCarts = await productService.findAllCarts();
    console.log("allcarts", allCarts);
    res.status(201).json(allCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = cartRouter;

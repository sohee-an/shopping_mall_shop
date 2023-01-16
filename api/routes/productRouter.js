const productRouter = require("express").Router();
const productService = require("../services/productService");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

// product creates
productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const savedProduct = await productService.saveProduct(req.body);
    console.log("router", savedProduct);
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// product update
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  const updateProduct = req.body;
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      updateProduct
    );
    console.log("updatedProduct", updatedProduct);
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    console.log("id", req.params.id);
    const deletedProduct = await productService.deletProduct(req.params.id);
    res.status(201).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get product
productRouter.get("/find/:id", async (req, res) => {
  try {
    const getProduct = await productService.getProduct(req.params.id);
    console.log("getProduct:", getProduct);
    res.status(201).json(getProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all product // category별
productRouter.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  console.log(qCategory);

  try {
    let products;

    if (qNew) {
      products = await productService.qNewFindProduct();
    } else if (qCategory) {
      console.log("cateogry");
      products = await productService.qCategoryFindProduct(qCategory);
    } else {
      products = await productService.findAllProduct();
    }
    console.log(products);
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = productRouter;

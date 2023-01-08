const productRouter = require("express").Router();
const productService = require("../services/productService");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

// product creates
productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  //const newProduct = new Product(req.body);
  const saveProduct = await productService.saveProduct(req.body);
  res.status(200).json(saveProduct);

  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

// product update
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await productService.updateProduct(req.params.id);
    res.status(201).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete update
productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedProduct = await productService.deletProduct(req.params.id);
    res.status(201).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get product
productRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getProduct = await productService.getProduct(req.params.id);
    res.status(201).json(getProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all product // category별
productRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
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

const { model } = require("mongoose");
const ProductSchema = require("../schemas/Product");

const Product = model("products", ProductSchema);

class ProductModel {
  async saveProduct(newProduct) {
    const savedProduct = await Product.create(newProduct);

    return savedProduct;
  }

  async updateProduct(productId, updateProduct) {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updateProduct },
      { new: true }
    );
    return updatedProduct;
  }
  async deletProduct(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  }

  async getProduct(productId) {
    const getProduct = await Product.findById(productId);
    return getProduct;
  }

  async findAllProduct() {
    const allProduct = await Product.find();
    return allProduct;
  }

  async qNewFindProduct() {
    const QNewProducts = await Product.find().sort({ _id: -1 }).limit(1);

    return QNewProducts;
  }
  async qCategoryFindProduct(qCategory) {
    const qCategoryProducts = await Product.find({
      categories: {
        $in: [qCategory],
      },
    });
    return qCategoryProducts;
  }
  async findAllProduct() {
    const allProducts = await Product.find();
    return allProducts;
  }

  //   async findStateUsers(lastYear) {
  //     const findedStateUsers = await User.aggregate([
  //       { $match: { createdAt: { $gte: lastYear } } },
  //       {
  //         $project: {
  //           month: { $month: "$createdAt" },
  //         },
  //       },
  //       {
  //         $group: {
  //           _id: "$month",
  //           total: { $sum: 1 },
  //         },
  //       },
  //     ]);
  //     console.log(findedStateUsers);
  //     return findedStateUsers;
  //   }
}

const productModel = new ProductModel();

module.exports = productModel;

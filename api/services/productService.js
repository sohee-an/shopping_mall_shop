const productModel = require("../db/models/productModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async saveProduct(newProduct) {
    const savedProdcut = await this.productModel.saveProduct(newProduct);
    console.log("service", savedProdcut);
    return savedProdcut;
  }
  //update
  async updateProduct(productId, updateProduct) {
    const updatedProduct = await this.productModel.updateProduct(
      productId,
      updateProduct
    );
    console.log("service,", updatedProduct);
    return updatedProduct;
  }
  //delete
  async deletProduct(productId) {
    const deletedProduct = await this.productModel.deletProduct(productId);
    return deletedProduct;
  }
  //get product
  async getProduct(productId) {
    const getProduct = await this.productModel.getProduct(productId);
    return getProduct;
  }
  //get all Product
  async findAllProduct() {
    console.log("service");
    const allProduct = await this.productModel.findAllProduct();
    return allProduct;
  }
  //get qNew Product
  async qNewFindProduct() {
    const qNewProduct = await this.productModel.qNewFindProduct();
    return qNewProduct;
  }
  async qCategoryFindProduct(qCategory) {
    const qCategoryProduct = await this.productModel.qCategoryFindProduct(
      qCategory
    );
    return qCategoryProduct;
  }
}
const productService = new ProductService(productModel);

module.exports = productService;

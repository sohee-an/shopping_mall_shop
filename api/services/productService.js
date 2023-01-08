const productModel = require("../db/models/productModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  //   //delete id로
  //   async delete(userId) {
  //     const deleteUser = await this.userModel.delete(userId);
  //     return deleteUser;
  //   }
  //   // findUser id로
  //   async findByIdUser(userId) {
  //     const findUser = await this.userModel.findById(userId);
  //     console.log(findUser);
  //     return findUser;
  //   }

  //   async findAllUsers() {
  //     const allUsers = await this.userModel.findAllUsers();
  //     return allUsers;
  //   }

  //   async findLimitUsers(newUsersNumber) {
  //     const findedLimitUsers = await this.userModel.findLimitUsers(
  //       newUsersNumber
  //     );
  //     return findedLimitUsers;
  //   }

  //   async findStatsUsers(lastYear) {
  //     const findedStatsUsers = await this.userModel.findStateUsers(lastYear);
  //     return findedStatsUsers;
  //   }
  async saveProduct(newProduct) {
    const saveProdcut = await this.productModel.saveProduct(newProduct);
    return saveProdcut;
  }
  //update
  async updateProduct(productId, updateProduct) {
    const updatedProduct = await this.productModel.updateProduct(
      productId,
      updateProduct
    );
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

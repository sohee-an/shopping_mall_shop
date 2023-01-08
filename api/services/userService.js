const userModel = require("../db/models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }
  //update
  async findByIdUpdate(userId, Body) {
    const updatedUser = await thsi.userModel.findByIdUpdate(userId, Body);
    return updatedUser;
  }
  //delete id로
  async delete(userId) {
    const deleteUser = await this.userModel.delete(userId);
    return deleteUser;
  }
  // findUser id로
  async findByIdUser(userId) {
    const findUser = await this.userModel.findById(userId);
    console.log(findUser);
    return findUser;
  }

  async findAllUsers() {
    const allUsers = await this.userModel.findAllUsers();
    return allUsers;
  }

  async findLimitUsers(newUsersNumber) {
    const findedLimitUsers = await this.userModel.findLimitUsers(
      newUsersNumber
    );
    return findedLimitUsers;
  }

  async findStatsUsers(lastYear) {
    const findedStatsUsers = await this.userModel.findStateUsers(lastYear);
    return findedStatsUsers;
  }
}
const userService = new UserService(userModel);

module.exports = userService;

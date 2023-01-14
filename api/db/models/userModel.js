const { model } = require("mongoose");
const UserSchema = require("../schemas/UserSchema");

const User = model("user", UserSchema);

class UserModel {
  async create(userInfo) {
    console.log("userInfo", userInfo);
    const saveUser = await User.create(userInfo);
    console.log(saveUser);
    return saveUser;
  }
  async findUser(username) {
    const loginUsername = await User.findOne({ username: username });
    return loginUsername;
  }
  async findByIdUpdate(userId, Body) {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: Body },
      { new: true }
    );
    return updatedUser;
  }
  async delete(userId) {
    const deleteUser = await User.findByIdAndDelete(userId);
    return deleteUser;
  }

  async findById(userId) {
    const findUser = await User.findById(userId);
    return findUser;
  }

  async findAllUsers() {
    const findAllUsers = await User.find();
    return findAllUsers;
  }

  async findLimitUsers(newUsersNumber) {
    const findedLimitUsers = newUsersNumber
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    return findedLimitUsers;
  }

  async findStateUsers(lastYear) {
    const findedStateUsers = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    console.log(findedStateUsers);
    return findedStateUsers;
  }
}

const userModel = new UserModel();

module.exports = userModel;

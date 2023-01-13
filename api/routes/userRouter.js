const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const userService = require("../services/userService");

const userRouter = require("express").Router();

//UPDATE
userRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const { password } = req.body;
  const userId = req.params.id;

  if (password) {
    password = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await userService.findByIdUpdate(userId, req.body);
    console.log("update", updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
userRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await userService.delete(userId);
    if (deleteUser) {
      res.status(200).json("회원탈퇴가 성공적으로 이루어졌습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//admin
//get user
userRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const userId = req.params.id;

    const getUser = await userService.findByIdUser(userId);
    console.log(getUser);
    const { password, ...others } = getUser._doc;

    res.status(200).json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

//admin _all user
userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  const newUsersNumber = req.query.new;

  try {
    // 최신 유저만 보여주기

    const newLimitedUsers = await userService.findLimitUsers(newUsersNumber);

    //const { password, ...others } = getUser._doc;

    res.status(200).json(newLimitedUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user stats // 월별 총 사용자 구하기
userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await userService.findStatsUsers(lastYear);
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = userRouter;

const authRouter = require("express").Router();
const userService = require("../services/authService");
//회원가입

authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    console.log(req.body);
    const newUser = await userService.addUser({
      username,
      email,
      password,
      firstName,
      lastName,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("err", error);
    res.status(500).json(error);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);

    const loginUser = await userService.loginUser({
      username,
      password,
    });
    console.log("loginuser", loginUser);

    res.status(201).json(loginUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = authRouter;

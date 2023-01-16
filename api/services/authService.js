const userModel = require("../db/models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }
  //회원가입
  async addUser(userInfo) {
    const { email, username, password, firstName, lastName } = userInfo;
    const newUser = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      ).toString(),
    };
    const saveUser = await this.userModel.create(newUser);
    return saveUser;
  }

  //로그인유저
  async loginUser(userInfo) {
    const { username, password } = userInfo;
    const user = await this.userModel.findUser(username);

    console.log("loginuser", user);
    if (!user) {
      throw "이름을 다시 확인해주세요 ";
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log(OriginalPassword !== password);

    if (OriginalPassword !== password) {
      throw "비밀번호를 다시 확인해주세요 ";
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        { expiresIn: "3d" }
      );
      const { password, ...others } = user._doc;
      return { ...others, accessToken };
    }

    return user;
  }
}
const authService = new AuthService(userModel);

module.exports = authService;

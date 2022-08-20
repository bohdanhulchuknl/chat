const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    //  check username
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }
    //   check email
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }
    //   password hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err)
  }
};

module.exports.login = async (req, res, next) => {
  try {

    const { username,  password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }

    const isPassworsValid = await bcrypt.compare(password, user.password)
    if (!isPassworsValid) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }

    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err)
  }
};


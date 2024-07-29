const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = async (req, res) => {
  try {
    const check = await Users.findOne({ email: req.body.email });

    if (check) {
      return res.status(400).json({ success: false, errors: "existing user" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: cart,
    });

    await user.save();

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, errors: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (user) {
      const passCompare = await bcrypt.compare(req.body.password, user.password);
      if (passCompare) {
        const data = { user: { id: user.id } };
        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, token });
      } else {
        res.status(400).json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.status(400).json({ success: false, errors: "Wrong Email id" });
    }
  } catch (error) {
    res.status(500).json({ success: false, errors: error.message });
  }
};

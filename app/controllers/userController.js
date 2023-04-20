const { Users } = require('../models');
const dotenv = require('dotenv');
dotenv.config();


class userController {

  static async loginUser(req, res) {
    try {
      const { id } = req.body;
      const user = await Users.findByPk(id);
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async registerUser(req, res) {
    try {
      const { name, email } = req.body;
      const user = await Users.create({ name, email });
      res.status(201).json({ user });
    } catch (error) {
      console.trace(error);
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = userController;

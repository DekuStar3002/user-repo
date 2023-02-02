const { userService } = require('../services');
const addUser = (req, res) => {
  try {
    const { body } = req;
    const users = userService.addUser(body);
    res.status(201).json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { addUser };
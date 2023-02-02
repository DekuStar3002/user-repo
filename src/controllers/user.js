import services from '../services/index.js';
const addUser = (req, res) => {
  try {
    const { body } = req;
    const users = services.userService.addUser(body);
    res.status(201).json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

export default { addUser };
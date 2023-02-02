const express = require('express');
const { userController } = require('../controllers');
const router = express.Router();

router.route('/users')
  .post(userController.addUser);

module.exports = router;
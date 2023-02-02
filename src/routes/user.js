import express from 'express';
import controllers from '../controllers/index.js';
const router = express.Router();

router.route('/users')
  .post(controllers.userController.addUser);

export default router;
import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// CRUD routes for users
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
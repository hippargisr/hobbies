import express from 'express';
import hobbyController from '../controllers/hobbyController';

const router = express.Router();

// CRUD routes for hobbies
router.get('/', hobbyController.getAllHobbies);
router.get('/:id', hobbyController.getHobbyById);
router.post('/', hobbyController.createHobby);
router.put('/:id', hobbyController.updateHobby);
router.delete('/:id', hobbyController.deleteHobby);

export default router;

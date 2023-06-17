import { Request, Response } from 'express';
import User from '../models/user.model';

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find().populate('hobbies');
      res.json(users);
    } catch (err) {
      console.error('Failed to get users', err);
      res.status(500).json({ error: 'Failed to get users' });
    }
  },

  getUserById: async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.id).populate('hobbies');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Failed to get user', err);
      res.status(500).json({ error: 'Failed to get user' });
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const { name, hobbies } = req.body;
      const user = await User.create({ name, hobbies });
      res.status(201).json(user);
    } catch (err) {
      console.error('Failed to create user', err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const { name, hobbies } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { name, hobbies },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Failed to update user', err);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.sendStatus(204);
    } catch (err) {
      console.error('Failed to delete user', err);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};

export default userController;

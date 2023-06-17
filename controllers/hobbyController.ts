import { Request, Response } from 'express';
import Hobby from '../models/hobby.model';

const hobbyController = {
  getAllHobbies: async (req: Request, res: Response) => {
    try {
      const hobbies = await Hobby.find();
      res.json(hobbies);
    } catch (err) {
      console.error('Failed to get hobbies', err);
      res.status(500).json({ error: 'Failed to get hobbies' });
    }
  },

  getHobbyById: async (req: Request, res: Response) => {
    try {
      const hobby = await Hobby.findById(req.params.id);
      if (!hobby) {
        return res.status(404).json({ error: 'Hobby not found' });
      }
      res.json(hobby);
    } catch (err) {
      console.error('Failed to get hobby', err);
      res.status(500).json({ error: 'Failed to get hobby' });
    }
  },

  createHobby: async (req: Request, res: Response) => {
    try {
      const { passionLevel, name, year } = req.body;
      const hobby = await Hobby.create({ passionLevel, name, year });
      res.status(201).json(hobby);
    } catch (err) {
      console.error('Failed to create hobby', err);
      res.status(500).json({ error: 'Failed to create hobby' });
    }
  },

  updateHobby: async (req: Request, res: Response) => {
    try {
      const { passionLevel, name, year } = req.body;
      const hobby = await Hobby.findByIdAndUpdate(
        req.params.id,
        { passionLevel, name, year },
        { new: true }
      );
      if (!hobby) {
        return res.status(404).json({ error: 'Hobby not found' });
      }
      res.json(hobby);
    } catch (err) {
      console.error('Failed to update hobby', err);
      res.status(500).json({ error: 'Failed to update hobby' });
    }
  },

  deleteHobby: async (req: Request, res: Response) => {
    try {
      const hobby = await Hobby.findByIdAndDelete(req.params.id);
      if (!hobby) {
        return res.status(404).json({ error: 'Hobby not found' });
      }
      res.sendStatus(204);
    } catch (err) {
      console.error('Failed to delete hobby', err);
      res.status(500).json({ error: 'Failed to delete hobby' });
    }
  },
};

export default hobbyController;

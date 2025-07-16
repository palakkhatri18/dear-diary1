import express from 'express';
import DiaryEntry from '../models/DiaryEntry.js';

const router = express.Router();

// Create or update entry
router.post('/', async (req, res) => {
  try {
    const { userId, date, entryText, mood, tags } = req.body;

    const existing = await DiaryEntry.findOne({ userId, date });

    if (existing) {
      existing.entryText = entryText;
      existing.mood = mood;
      existing.tags = tags;
      await existing.save();
      return res.status(200).json(existing);
    }

    const newEntry = new DiaryEntry({ userId, date, entryText, mood, tags });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save diary entry' });
  }
});

// Get entry by date
router.get('/:userId/:date', async (req, res) => {
  try {
    const { userId, date } = req.params;
    const formattedDate = new Date(date).toISOString().split('T')[0];
    const entry = await DiaryEntry.findOne({ userId, date: formattedDate });
    if (!entry) return res.status(404).json({ message: 'No entry found' });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch entry' });
  }
});


// Get all entries for a user (optional)
router.get('/:userId', async (req, res) => {
  try {
    const entries = await DiaryEntry.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

export default router;

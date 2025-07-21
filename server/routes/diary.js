import express from 'express';
import DiaryEntry from '../models/DiaryEntry.js';

const router = express.Router();

// ✅ Create or update a diary entry for a user on a specific date
router.post('/', async (req, res) => {
  try {
    const { userId, date, entryText, mood, tags } = req.body;

    // Format the date to YYYY-MM-DD in case it's full ISO
    const formattedDate = new Date(date).toISOString().split('T')[0];

    const updatedEntry = await DiaryEntry.findOneAndUpdate(
      { userId, date: formattedDate },
      { entryText, mood, tags },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json(updatedEntry);
  } catch (err) {
    console.error('Save error:', err.message);
    res.status(500).json({ error: 'Failed to save diary entry', details: err.message });
  }
});

// ✅ Get entry for specific user + date
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

// ✅ Get all entries for a specific user (optional)
router.get('/:userId', async (req, res) => {
  try {
    const entries = await DiaryEntry.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

export default router;

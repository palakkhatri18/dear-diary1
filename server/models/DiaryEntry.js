import mongoose from 'mongoose';

const diaryEntrySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: String, // format: "YYYY-MM-DD"
    required: true,
  },
  entryText: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

// ✅ Make sure combination of userId + date is unique
diaryEntrySchema.index({ userId: 1, date: 1 }, { unique: true });

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);
export default DiaryEntry;

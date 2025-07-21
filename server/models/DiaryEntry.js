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

// ✅ Make userId + date unique so each user has their own entry per date
diaryEntrySchema.index({ userId: 1, date: 1 }, { unique: true });

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);
export default DiaryEntry;

import mongoose from 'mongoose';

const diaryEntrySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    // We remove the single index here because the compound index below is more efficient
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

// ✅ Add a compound index for the most common query
// This will make finding a diary entry by userId and date much faster.
diaryEntrySchema.index({ userId: 1, date: 1 });

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);
export default DiaryEntry;
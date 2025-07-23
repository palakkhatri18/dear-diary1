import mongoose from 'mongoose';

const diaryEntrySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true, // Add an index to the userId field for faster queries
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

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);
export default DiaryEntry;
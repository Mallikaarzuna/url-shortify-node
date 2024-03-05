import mongoose from 'mongoose';

const UserUrlSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  longUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const UserUrl = mongoose.model('UserUrl', UserUrlSchema);

export default UserUrl;

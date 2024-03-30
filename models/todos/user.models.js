import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: String,
  email: unique,
},{timestamps: true}
);

export const User = mongoose.model('User', userSchema);

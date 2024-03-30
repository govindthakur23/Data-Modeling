import mongoose, { mongo } from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy:{
      type: mongoose.Schema.Type.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export const Subtodo = mongoose.model('Subtodo', subTodoSchema);

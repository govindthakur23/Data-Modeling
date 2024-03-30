import mongoose, { Mongoose } from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: String,
    complete: {
      type: String,
      default: false,
    },
    createdBy:{
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subtodo"
      }
    ]
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status:{
     type: String,
    enum:["To Do","Work In Progress","Completed"],
    default:"To Do",
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
},{timestamps:true});

module.exports = mongoose.model("Task",taskSchema);
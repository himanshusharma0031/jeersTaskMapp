const Task = require("../Model/Task");

// Get Tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.auth.userId });
  res.json(tasks);
};

// Add Task
const addTask = async (req, res) => {
  const { title, description, priority } = req.body;

  const task = await Task.create({
    title,
    description,
    priority,
    user: req.auth.userId,
  });

  res.status(201).json(task);
};

// Update Task
const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
};

// Delete Task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task Deleted",
  });
};

// Update Status
const updateStatus = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );

  res.json(task);
};

// Update Priority
const updatePriority = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      priority: req.body.priority,
    },
    { new: true }
  );

  res.json(task);
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  updateStatus,
  updatePriority,
};
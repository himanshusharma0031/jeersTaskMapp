const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  updateStatus,
  updatePriority,
} = require("../controllers/taskController");

router.get("/", auth, getTasks);

router.post("/", auth, addTask);

router.put("/:id", auth, updateTask);

router.delete("/:id", auth, deleteTask);

router.patch("/:id/status", auth, updateStatus);

router.patch("/:id/priority", auth, updatePriority);

module.exports = router;
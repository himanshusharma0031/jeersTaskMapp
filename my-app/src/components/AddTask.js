import { useState } from "react";
import API from "../axios";

function AddTask({ getTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        title,
        description,
      });

      alert("Task Added");

      setTitle("");
      setDescription("");

      getTasks();

    } catch (err) {
      alert("Please fill title or description");
    }
  };

  return (
    <form onSubmit={addTask}>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button>Add Task</button>

    </form>
  );
}

export default AddTask;
import { useState } from "react";
import API from "../axios";
import toast from "react-hot-toast";


function AddTask({ getTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");


  const addTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        title,
        description,
        priority,
      });

      toast.success("Task Added Successfully!");


      setTitle("");
      setDescription("");
      setPriority("Medium");

      getTasks();

    } catch (err) {
      toast.error("Please fill title or description");
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

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <br /><br />

      <button>Add Task</button>

    </form>
  );
}

export default AddTask;
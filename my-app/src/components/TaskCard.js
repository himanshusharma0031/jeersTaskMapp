import API from "../axios";
import toast from "react-hot-toast";
import "./TaskCard.css";
function TaskCard({ task, getTasks }) {

  const deleteTask = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      toast.success("Task Deleted Successfully!");
      getTasks();
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };
  const editTask = async () => {
    const title = prompt("Enter New Title", task.title);
    if (title === null) return;

    const description = prompt("Enter Description", task.description);
    if (description === null) return;

    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
      });
      toast.success("Task Updated Successfully!");
      getTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const changeStatus = async (e) => {
    try {
      await API.patch(`/tasks/${task._id}/status`, {
        status: e.target.value,
      });
      toast.success("Task Status Updated!");
      getTasks();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const changePriority = async (e) => {
    try {
      await API.patch(`/tasks/${task._id}/priority`, {
        priority: e.target.value,
      });
      toast.success("Task Priority Updated!");
      getTasks();
    } catch (error) {
      toast.error("Failed to update priority");
    }
  };

  return (

    <div className="card"
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
      }}
    >

      <h3>{task.title}</h3>

      <p>{task.description}</p>
      <p><strong>Priority:</strong> <span className={`priority ${task.priority?.toLowerCase() || 'medium'}`}>{task.priority || "Medium"}</span></p>

      <select value={task.status} onChange={changeStatus}>

        <option>To Do</option>

        <option>Work In Progress</option>

        <option>Completed</option>

      </select>

      <select value={task.priority || "Medium"} onChange={changePriority} style={{ marginLeft: "10px" }}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <br /><br />
      <button onClick = {editTask}>Edit</button>
      <button className="delete-btn" onClick={deleteTask}>Delete</button>

    </div>

  );

}

export default TaskCard;
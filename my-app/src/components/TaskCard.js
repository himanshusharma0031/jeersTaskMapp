import API from "../axios";
import "./TaskCard.css";
function TaskCard({ task, getTasks }) {

  const deleteTask = async () => {

    await API.delete(`/tasks/${task._id}`);

    alert("Task Deleted");

    getTasks();

  };
  const editTask = async () => {

const title=prompt("Enter New Title",task.title);

const description=prompt("Enter Description",task.description);

await API.put(`/tasks/${task._id}`,{

title,

description,

});

getTasks();

}

  const changeStatus = async (e) => {

    await API.patch(`/tasks/${task._id}/status`, {

      status: e.target.value,

    });

    getTasks();

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

      <select value={task.status} onChange={changeStatus}>

        <option>To Do</option>

        <option>Work In Progress</option>

        <option>Completed</option>

      </select>

      <br /><br />
      <button onClick = {editTask}>Edit</button>
      <button className="delete-btn" onClick={deleteTask}>Delete</button>

    </div>

  );

}

export default TaskCard;
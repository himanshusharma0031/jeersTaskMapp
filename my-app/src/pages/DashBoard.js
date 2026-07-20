import { useEffect, useState } from "react";
import API from "../axios";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import "./DashBoard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="dashboard">

      <h1 className="heading">Task Dashboard</h1>

      <AddTask className="add-task" getTasks={getTasks} />

      <hr />
   <div className="task-list">
     {tasks.map((task) => (
        <TaskCard key={task._id} task={task} getTasks={getTasks} />
      ))}
   </div>
     

    </div>
  );
}

export default Dashboard;
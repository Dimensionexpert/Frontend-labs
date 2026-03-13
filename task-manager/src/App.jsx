import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn useState", completed: false },
    { id: 2, text: "Build task manager", completed: false },
  ]);

  const onAdd = (text) => {
    setTasks([...tasks, { id: Date.now(), text: text, completed: false }]);
  };
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <p className="task-count">{tasks.length} tasks remaining</p>
      <AddTask onAdd={onAdd} />
      <TaskList tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

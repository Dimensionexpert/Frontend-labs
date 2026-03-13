import "./TaskItem.css";

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>✕</button>
    </div>
  );
}

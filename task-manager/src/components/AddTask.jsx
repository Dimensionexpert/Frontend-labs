import { useState } from "react";
import "./AddTask.css";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="add-task">
      <div className={`input-wrapper ${text ? "has-value" : ""}`}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <label>Add a task...</label>
        <span className="cursor">▊</span>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

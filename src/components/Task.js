import React from "react";

function Task({ task, text, category, onDeleteTask = () => {} }) {
  // Handle both formats: {task} object or separate {text, category} props
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;
  
  if (!taskText) return null;

  function handleDeleteClick() {
    onDeleteTask(task || { text: taskText, category: taskCategory });
  }

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
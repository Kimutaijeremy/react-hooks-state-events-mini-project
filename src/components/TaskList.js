import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  if (!tasks || tasks.length === 0) {
    return <div className="tasks">No tasks to display</div>;
  }

  const taskList = tasks.map((task, index) => (
    <Task key={index} task={task} onDeleteTask={onDeleteTask} />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
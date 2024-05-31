import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
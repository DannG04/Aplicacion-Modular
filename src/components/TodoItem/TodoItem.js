import React from 'react';
import './TodoItem.css';
import IconTrash from '../Icons/IconTrash';

const TodoItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <li className={`todo-item ${task.isComplete ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDeleteTask(task.id)}
      >
        <IconTrash />
      </button>
    </li>
  );
};

export default TodoItem;
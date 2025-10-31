import React from 'react';
import './TodoItem.css';
import IconTrash from '../Icons/IconTrash';

const TodoItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete} // ¡Ya no pasamos el ID aquí!
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
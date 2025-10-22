import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem'; // <-- Importar el hijo

const TodoList = () => {
  // Estado 'tasks' ahora necesita saber si está completo
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', isComplete: true },
    { id: 2, text: 'Construir una App', isComplete: false },
    { id: 3, text: 'Modularizar componentes', isComplete: false }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isComplete: false // Nueva propiedad
    };

    // Usamos '.concat' o '...' para inmutabilidad
    setTasks(tasks.concat(newTask)); 
    setInputValue('');
  };

  // --- NUEVAS FUNCIONES ---

  // Función para marcar/desmarcar una tarea
  const handleToggleComplete = (idToToggle) => {
    setTasks(
      tasks.map(task => 
        task.id === idToToggle 
          ? { ...task, isComplete: !task.isComplete } // Crea un nuevo objeto
          : task // Devuelve el objeto original
      )
    );
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (idToDelete) => {
    setTasks(
      tasks.filter(task => task.id !== idToDelete)
    );
  };

  // --- RENDER ACTUALIZADO ---

  return (
    <div className="todo-list-container">
      <h2>Mi Lista de Tareas</h2>

      <form onSubmit={handleAddTask} className="add-task-form">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Añade una nueva tarea..."
        />
        <button type="submit">Añadir</button>
      </form>

      <ul>
        {/* Aquí está la magia: 
          Mapeamos las tareas y por cada una, renderizamos un <TodoItem />
          pasándole los datos y las FUNCIONES como props.
        */}
        {tasks.map(task => (
          <TodoItem 
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
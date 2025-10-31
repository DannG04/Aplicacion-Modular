import React, { useState, useEffect } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem'; // <-- Importar el hijo
import { db } from '../../firebaseConfig'; // <-- Importa nuestra config
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // <-- Importa funciones de Firestore
import { taskService } from '../../services/taskService'; // <-- Importar el servicio
const TodoList = () => {
  // El estado 'tasks' ahora empieza vacío
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState('');

  // --- LEER TAREAS (GET) ---
  // useEffect se ejecutará cuando el componente se monte
  useEffect(() => {
    // 1. Creamos una referencia a nuestra colección "tasks" en Firestore
    const collectionRef = collection(db, "tasks");

    // 2. Creamos una consulta (query) para ordenar las tareas por fecha
    const q = query(collectionRef, orderBy("createdAt", "asc"));

    // 3. onSnapshot es el ¡ESCUCHADOR EN TIEMPO REAL!
    // Se dispara una vez al inicio y luego CADA VEZ que los datos cambian
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newTasks = [];
      querySnapshot.forEach((doc) => {
        newTasks.push({ 
          ...doc.data(), 
          id: doc.id // El ID del documento es importante
        });
      });
      setTasks(newTasks); // Actualizamos nuestro estado de React
    });

    // Esta función de limpieza se ejecuta cuando el componente se "desmonta"
    // Evita fugas de memoria
    return () => unsubscribe();

  }, []); // El '[]' asegura que esto se ejecute solo una vez



  const handleAddTask = async (e) => { // La hacemos 'async'
    e.preventDefault();
    if (inputValue.trim() === '') return;

    try {
      // Usamos el servicio de tareas
      await taskService.addTask(inputValue.trim());
      setInputValue('');
      // NOTA: No necesitamos 'setTasks' aquí.
      // ¡'onSnapshot' detectará el nuevo documento y actualizará el estado por nosotros!
    } catch (error) {
      console.error('Error agregando tarea:', error);
      alert('Error al agregar la tarea. Inténtalo de nuevo.');
    }
  };

  // --- NUEVAS FUNCIONES ---

  // Función para marcar/desmarcar una tarea
  const handleToggleComplete = async (task) => { // Pasamos el objeto 'task' entero
    try {
      await taskService.toggleTaskComplete(task);
    } catch (error) {
      console.error('Error cambiando estado de tarea:', error);
      alert('Error al cambiar el estado de la tarea. Inténtalo de nuevo.');
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
    } catch (error) {
      console.error('Error eliminando tarea:', error);
      alert('Error al eliminar la tarea. Inténtalo de nuevo.');
    }
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
        {tasks.map(task => (
          <TodoItem 
            key={task.id}
            task={task}
            // ¡Pasa la función correctamente!
            onToggleComplete={() => handleToggleComplete(task)} // Pasa el objeto 'task'
            onDeleteTask={handleDeleteTask} // Esta ya pasaba solo el ID
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
import { db } from '../firebaseConfig';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';

export const taskService = {
  // Función para agregar una nueva tarea
  addTask: async (taskText) => {
    try {
      const docRef = await addDoc(collection(db, 'tasks'), {
        text: taskText,
        completed: false,
        createdAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Función para cambiar el estado de completado de una tarea
  toggleTaskComplete: async (task) => {
    try {
      const taskRef = doc(db, 'tasks', task.id);
      const newCompletedStatus = !task.completed;
      
      // Actualizar la tarea
      await updateDoc(taskRef, {
        completed: newCompletedStatus,
        completedAt: newCompletedStatus ? serverTimestamp() : null
      });

      // Si se marca como completada, guardar en el histórico
      if (newCompletedStatus) {
        await addDoc(collection(db, 'taskHistory'), {
          taskId: task.id,
          text: task.text,
          action: 'completed',
          timestamp: serverTimestamp(),
          originalCreatedAt: task.createdAt
        });
      }
    } catch (error) {
      console.error('Error toggling task completion:', error);
      throw error;
    }
  },

  // Función para eliminar una tarea
  deleteTask: async (taskId) => {
    try {
      // Primero obtener los datos de la tarea antes de eliminarla
      const taskRef = doc(db, 'tasks', taskId);
      const taskSnapshot = await getDoc(taskRef);
      
      if (taskSnapshot.exists()) {
        const taskData = taskSnapshot.data();
        
        // Guardar en el histórico antes de eliminar
        await addDoc(collection(db, 'taskHistory'), {
          taskId: taskId,
          text: taskData.text,
          action: 'deleted',
          timestamp: serverTimestamp(),
          originalCreatedAt: taskData.createdAt,
          wasCompleted: taskData.completed,
          completedAt: taskData.completedAt || null
        });

        // Ahora eliminar la tarea
        await deleteDoc(taskRef);
      } else {
        throw new Error('La tarea no existe');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  // Función para obtener el histórico de tareas
  getTaskHistory: async () => {
    try {
      const historyRef = collection(db, 'taskHistory');
      const q = query(historyRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const history = [];
      querySnapshot.forEach((doc) => {
        history.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return history;
    } catch (error) {
      console.error('Error getting task history:', error);
      throw error;
    }
  }
};

import React, { useState, useEffect } from 'react';
import './TaskHistory.css';
import { taskService } from '../../services/taskService';

const TaskHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const historyData = await taskService.getTaskHistory();
        setHistory(historyData);
      } catch (error) {
        console.error('Error cargando histórico:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    // Si es un timestamp de Firestore
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    
    // Si es una fecha normal
    return new Date(timestamp).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActionText = (action) => {
    return action === 'completed' ? 'Completada' : 'Eliminada';
  };

  const getActionClass = (action) => {
    return action === 'completed' ? 'action-completed' : 'action-deleted';
  };

  if (loading) {
    return <div className="task-history-loading">Cargando histórico...</div>;
  }

  return (
    <div className="task-history-container">
      <h2>Histórico de Tareas</h2>
      
      {history.length === 0 ? (
        <p className="no-history">No hay histórico de tareas aún.</p>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div key={item.id} className={`history-item ${getActionClass(item.action)}`}>
              <div className="history-item-header">
                <span className={`action-badge ${getActionClass(item.action)}`}>
                  {getActionText(item.action)}
                </span>
                <span className="history-date">
                  {formatDate(item.timestamp)}
                </span>
              </div>
              
              <div className="history-item-content">
                <p className="task-text">"{item.text}"</p>
                
                <div className="task-details">
                  <span className="detail-item">
                    Creada: {formatDate(item.originalCreatedAt)}
                  </span>
                  
                  {item.action === 'deleted' && item.wasCompleted && (
                    <span className="detail-item">
                      Completada: {formatDate(item.completedAt)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskHistory;
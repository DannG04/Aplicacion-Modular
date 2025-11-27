import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './TodoItem';

describe('TodoItem - Tests Básicos', () => {

  // Tarea de ejemplo para probar los tests
  const tarea = {
    id: '1',
    text: 'Aprender Jest',
    completed: false
  };

  //  Verificar que se renderiza
  test('debe renderizar sin errores', () => {
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();
    
    const { container } = render(
      <TodoItem task={tarea} onToggleComplete={mockToggle} onDeleteTask={mockDelete} />
    );
    
    expect(container).toBeTruthy();
  });

  // Verificar que muestra el texto de la tarea
  test('debe mostrar el texto de la tarea', () => {
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();
    
    render(<TodoItem task={tarea} onToggleComplete={mockToggle} onDeleteTask={mockDelete} />);
    
    expect(screen.getByText('Aprender Jest')).toBeInTheDocument();
  });

  // Verificar que tiene un checkbox
  test('debe tener un checkbox', () => {
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();
    
    render(<TodoItem task={tarea} onToggleComplete={mockToggle} onDeleteTask={mockDelete} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

});

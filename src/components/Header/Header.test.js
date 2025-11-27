import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';


describe('Componente Header', () => {

  // Helper function para renderizar con Router
  const renderWithRouter = (component) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  //Verificar que se renderiza el header
  test('debe renderizar el header como banner', () => {
    renderWithRouter(<Header />);

    // Verificamos que existe un elemento con rol 'banner'
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  //Verificar que aparecen los enlaces de navegación
  test('debe mostrar todos los enlaces de navegación', () => {
    renderWithRouter(<Header />);

    // Verificamos que existen los enlaces
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Tareas')).toBeInTheDocument();
    expect(screen.getByText('Histórico')).toBeInTheDocument();
    expect(screen.getByText('Directorio')).toBeInTheDocument();
  });

  //Verificar que los enlaces tienen las rutas correctas
  test('debe tener las rutas correctas en los enlaces', () => {
    renderWithRouter(<Header />);

    const inicioLink = screen.getByText('Inicio').closest('a');
    const tareasLink = screen.getByText('Tareas').closest('a');
    const historicoLink = screen.getByText('Histórico').closest('a');
    const directorioLink = screen.getByText('Directorio').closest('a');

    expect(inicioLink).toHaveAttribute('href', '/');
    expect(tareasLink).toHaveAttribute('href', '/tareas');
    expect(historicoLink).toHaveAttribute('href', '/historial');
    expect(directorioLink).toHaveAttribute('href', '/directorio');
  });


});
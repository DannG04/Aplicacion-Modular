import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageNotFound from './PageNotFound';

describe('PageNotFound - Tests Básicos', () => {

  //Verificar que se renderiza
  test('debe renderizar el componente', () => {
    const { container } = render(<PageNotFound />);
    expect(container).toBeTruthy();
  });

  //Verificar que tiene un título
  test('debe mostrar el título "Página no encontrada"', () => {
    render(<PageNotFound />);
    
    const titulo = screen.getByText('Página no encontrada');
    expect(titulo).toBeInTheDocument();
  });

  // Verificar que tiene un párrafo
  test('debe mostrar el mensaje de error', () => {
    render(<PageNotFound />);
    
    const mensaje = screen.getByText('Lo sentimos, la página que buscas no existe.');
    expect(mensaje).toBeInTheDocument();
  });

  // Verificar que tiene un h2
  test('debe tener un elemento h2', () => {
    const { container } = render(<PageNotFound />);
    
    const h2 = container.querySelector('h2');
    expect(h2).toBeTruthy();
  });

  // Verificar que tiene un párrafo
  test('debe tener un elemento p', () => {
    const { container } = render(<PageNotFound />);
    
    const parrafo = container.querySelector('p');
    expect(parrafo).toBeTruthy();
  });

});

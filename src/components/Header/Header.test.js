import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para tener 'matchers' de Jest
import Header from './Header'; // El componente que queremos probar

// 1. Describe: Agrupa un conjunto de pruebas relacionadas
describe('Componente Header', () => {

  // 2. Test (o 'it'): Es la prueba individual
  test('debe renderizar el título de la aplicación', () => {

    // 3. Arrange (Organizar): Preparamos la prueba
    render(<Header />);

    // 4. Act (Actuar): (No es necesario en este test, 
    //    sería para simular clics, etc.)

    // 5. Assert (Afirmar): Comprobamos el resultado
    const titulo = screen.getByText('Mi Aplicación Modular');

    expect(titulo).toBeInTheDocument();
  });

  test('debe tener un rol de "banner"', () => {
    // Probamos por accesibilidad y semántica
    render(<Header />);

    // 'getByRole' es una mejor forma de buscar elementos
    const headerElement = screen.getByRole('banner'); 

    expect(headerElement).toBeInTheDocument();
  });

});
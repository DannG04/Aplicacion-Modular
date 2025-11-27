import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from './Welcome';


describe('Welcome - Tests Básicos', () => {

  //Verificar que el componente se renderiza
  test('debe renderizar sin errores', () => {
    const { container } = render(<Welcome nombre="Juan" />);
    
    expect(container).toBeTruthy(); // Verifica que existe
  });

  //Verificar texto con nombre normal
  test('debe mostrar el nombre correcto', () => {
    render(<Welcome nombre="María" />);
    
    const titulo = screen.getByText('Bienvenido, María!');
    // toBeInTheDocument verifica que está en el DOM
    expect(titulo).toBeInTheDocument();
  });

  // Verificar mensaje por defecto
  test('debe mostrar el mensaje por defecto', () => {
    render(<Welcome nombre="Pedro" />);
    
    const mensaje = screen.getByText('Este es un componente modularizado.');
    expect(mensaje).toBeInTheDocument();
  });

  // Verificar mensaje especial para "Desarrollador"
  test('debe mostrar mensaje especial para Desarrollador', () => {
    render(<Welcome nombre="Desarrollador" />);
    
    const mensajeEspecial = screen.getByText('Eres un crack');
    expect(mensajeEspecial).toBeInTheDocument();
  });

  // Verificar que NO muestra mensaje por defecto para Desarrollador
  test('no debe mostrar mensaje por defecto para Desarrollador', () => {
    render(<Welcome nombre="Desarrollador" />);
    
    // queryByText devuelve null si no encuentra
    const mensajeDefecto = screen.queryByText('Este es un componente modularizado.');
    // toBe(null) verifica que es exactamente null
    expect(mensajeDefecto).toBe(null);
  });

  // Verificar cantidad de elementos h2
  test('debe tener exactamente 1 título h2', () => {
    const { container } = render(<Welcome nombre="Ana" />);
    
    const titulos = container.querySelectorAll('h2');
    // toBe compara el número exacto
    expect(titulos.length).toBe(1);
  });

  // Verificar cantidad de párrafos
  test('debe tener exactamente 1 párrafo', () => {
    const { container } = render(<Welcome nombre="Luis" />);
    
    const parrafos = container.querySelectorAll('p');
    expect(parrafos.length).toBe(1);
  });

});

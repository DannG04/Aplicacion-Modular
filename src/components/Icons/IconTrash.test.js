import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconTrash from './IconTrash';

describe('IconTrash - Tests Básicos', () => {

  //Verificar que se renderiza
  test('debe renderizar el icono', () => {
    const { container } = render(<IconTrash />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy(); // Verifica que existe
  });

  //Verificar tamaño por defecto
  test('debe tener width de 18 por defecto', () => {
    const { container } = render(<IconTrash />);
    
    const svg = container.querySelector('svg');
    const width = svg.getAttribute('width');
    expect(width).toBe('18');
  });

  // Verificar height por defecto
  test('debe tener height de 18 por defecto', () => {
    const { container } = render(<IconTrash />);
    
    const svg = container.querySelector('svg');
    const height = svg.getAttribute('height');
    expect(height).toBe('18');
  });

});

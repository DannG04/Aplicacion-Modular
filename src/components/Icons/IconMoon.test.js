import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconMoon from './IconMoon';
  
describe('IconMoon - Tests Básicos', () => {

  // Verificar que se renderiza
  test('debe renderizar el icono', () => {
    const { container } = render(<IconMoon />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  //Verificar tamaño por defecto es 24
  test('debe tener width 24 por defecto', () => {
    const { container } = render(<IconMoon />);
    
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('24');
  });



});

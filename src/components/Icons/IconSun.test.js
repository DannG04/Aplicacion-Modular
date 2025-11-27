import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconSun from './IconSun';

describe('IconSun - Tests Básicos', () => {

  //  Verificar que se renderiza
  test('debe renderizar el icono', () => {
    const { container } = render(<IconSun />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  //Verificar tamaño por defecto
  test('debe tener tamaño 24 por defecto', () => {
    const { container } = render(<IconSun />);
    
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  // Verificar tamaño personalizado
  test('debe aceptar tamaño personalizado', () => {
    const { container } = render(<IconSun size={32} />);
    
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('32');
  });


});

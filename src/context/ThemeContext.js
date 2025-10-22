import React, { createContext, useState } from 'react';

// 1. Creamos el Contexto
// Le damos un valor inicial (opcional) que puede ser usado por los consumidores
// si no están envueltos en un Provider.
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// 2. Creamos el Componente "Proveedor"
// Este componente envolverá nuestra aplicación y proveerá el estado real.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' o 'dark'

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Pasamos el estado actual y la función para cambiarlo
  // a todos los componentes hijos a través del 'value' prop.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
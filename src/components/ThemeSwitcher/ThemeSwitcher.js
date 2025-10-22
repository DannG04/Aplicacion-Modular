import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import IconMoon from '../Icons/IconMoon'; // <-- Importar
import IconSun from '../Icons/IconSun';   // <-- Importar
import './ThemeSwitchers.css'; // Crearemos este archivo

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-switcher-btn">
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ThemeSwitcher;
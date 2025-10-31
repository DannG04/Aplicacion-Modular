import React from 'react';
import { Link } from 'react-router-dom'; // <-- Importar Link
import './Header.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-nav">

        <img src={logo} alt="Logo" className="logo" />
        <div >
          <nav>
            {/* Usamos <Link> en lugar de <a href=""> */}
            <Link to="/" >Inicio</Link>
            <Link to="/tareas">Tareas</Link>
            <Link to="/historial">Histórico</Link>
            <Link to="/directorio">Directorio</Link>
          </nav>
        </div>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
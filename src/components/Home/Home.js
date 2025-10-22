import React from 'react';
import Welcome from '../Welcome/Welcome.js';
const Home = () => {
  return (
    <div>
      <h2>Bienvenido a la Aplicación de Demostración</h2>
      <p>
        Usa la navegación de arriba para visitar el 
        Directorio de Usuarios o la Lista de Tareas.
      </p>
      <Welcome nombre={"Desarrollador"}/>
    </div>
  );
};

export default Home;
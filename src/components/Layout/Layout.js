import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Importar Outlet
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* El Outlet renderizará el componente de la ruta hija */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Ferretería Online</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/herramientas">Herramientas</Link></li>
        <li><Link to="/category/materiales">Materiales</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

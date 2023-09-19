import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLink = (index) => {
    setActiveLink(index);
  };

  return (
    <header>
      <h1 className="logo-name">My portfolio.</h1>

      <nav>
        <a
          href="#home"
          onClick={() => handleLink(0)}
          className={activeLink === 0 ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#sobre-mi"
          onClick={() => handleLink(1)}
          className={activeLink === 1 ? "active" : ""}
        >
          Sobre mi
        </a>
        <a
          href="#proyectos"
          onClick={() => handleLink(2)}
          className={activeLink === 2 ? "active" : ""}
        >
          Proyectos
        </a>
        <a
          href="#clientes"
          onClick={() => handleLink(3)}
          className={activeLink === 3 ? "active" : ""}
        >
          Clientes
        </a>
        <a
          href="#contacto"
          onClick={() => handleLink(4)}
          className={activeLink === 4 ? "active" : ""}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";

const Clientes = () => {
  return (
    <section className="clientes" id="clientes">
      <div className="all-container">
        <article className="cliente-card">
          <div className="img-container-cliente-card">
            <img
              src="alfa-icon.png"
              alt="logo-empresa"
              className="img-cliente-card"
            />
          </div>
          <div className="text-container-cliente-card">
            <h3 className="title-cliente-card">ABERTURAS ALFA</h3>
            <p className="text-cliente-card">
              Página web realizada para la empresa de aberturas de aluminio de
              la ciudad de Villa Nueva.
            </p>
            <a
              href="http://aberturasalfa.com.ar"
              target="_blank"
              className="link-cliente-card"
            >
              VISITAR
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Clientes;

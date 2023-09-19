import React from "react";

const SobreMi = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="all-container">
        <section className="section-left">
          <div className="text-container">
            <p className="text">
              Tengo 28 años y resido en la ciudad de Villa María, Córdoba,
              Argentina.
            </p>
            <p className="text">
              Apasionado por la tecnología, siempre aprendiendo cosas nuevas.
            </p>
            <p className="text">
              Músico aficionado y amante de los videojuegos.
            </p>
            <p className="text">
              Actualemente trabajando en el área de sistemas de una empresa
              local, realizando tareas de desarrollo y soporte.
            </p>
          </div>
        </section>

        <section className="section-right">
          <div className="skills-container">
            <div className="column-one">
              <div className="card-skill">
                <i class="bx bxl-html5"></i>
                <h3>HTML</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-css3"></i>
                <h3>CSS</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-sass"></i>
                <h3>SASS</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-javascript"></i>
                <h3>JAVASCRIPT</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-typescript"></i>
                <h3>TYPESCRIPT</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-react"></i>
                <h3>REACT</h3>
              </div>
            </div>

            <div className="column-two">
              <div className="card-skill">
                <i class="bx bxl-react"></i>
                <h3>REACT NATIVE</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-java"></i>
                <h3>JAVA</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-spring-boot"></i>
                <h3>SPRING</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-git"></i>
                <h3>GIT</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxl-aws"></i>
                <h3>AWS</h3>
              </div>

              <div className="card-skill">
                <i class="bx bxs-data"></i>
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SobreMi;

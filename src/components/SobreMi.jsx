import React from 'react'

const SobreMi = () => {

  return (
    <section className='sobre-mi' id='sobre-mi'>
        <div className='all-container'>
          <p className='text'>Tengo 28 años y resido en la ciudad de Villa María, Córdoba, Argentina. Soy ingeniero en alimentos graduado de la Universidad Nacional de Villa María, tuve varios trabajos no relacionados al mundo IT. A principios del año 2022 sentí la necesidad de hacer un cambio en mi vida profesional y comencé a estudiar mucho para lograrlo, soy una persona muy responsable y perseverante. Al dia de la fecha manejo las siguientes tecnologías: </p>

          <div className='skills-container'>

            <div className='card-skill'>
              <i class='bx bxl-html5' ></i>
              <h3>HTML</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-css3'></i>
              <h3>CSS</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-sass'></i>
              <h3>SASS</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-javascript'></i>
              <h3>JAVASCRIPT</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-react' ></i>
              <h3>REACT</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-java' ></i>
              <h3>JAVA</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-spring-boot' ></i>
              <h3>SPRING</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxl-git' ></i>
              <h3>GIT</h3>
            </div>


            <div className='card-skill'>
              <i class='bx bxs-data'></i>
              <h3>SQL</h3>
            </div>

            <div className='card-skill'>
              <i class='bx bxs-user-circle'></i>
              <h3>AGILE SCRUM</h3>
            </div>

          </div>

        </div>
    </section>
  )
}

export default SobreMi
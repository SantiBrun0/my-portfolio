import React from 'react'
import { useState } from 'react'

const Proyectos = () => {

  const [currentIndex, setCurrentIndex] = useState(1)

  const handleNext = () => {
    if (currentIndex !== 3) {
        setCurrentIndex(currentIndex + 1);
    }
  }

  const handlePrevious = () => {
    if (currentIndex !== 1) {
        setCurrentIndex(currentIndex - 1);
    }
  }


  return (
    <section className='proyectos' id='proyectos'>
        <div className='all-container'>

            <div className='flecha-izq'>
                <a onClick={handlePrevious}><i class='bx bxs-chevron-left' ></i></a>
            </div>

            <div className='flecha-der'>
                <a onClick={handleNext}><i class='bx bxs-chevron-right'></i></a>
            </div>

            <div className='slides-container'>
                
                {
                    (currentIndex === 1) ? 
                        <article className={`slide`} id='slide-1'>
                            <div className='container-cards'>
                                <div className='project-card'>
                                    <img src="/manage.png" alt="imagen-proyecto" />
                                    <h3>Manage</h3>
                                    <div className='techs'>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </div>
                                    <p>Proyecto realizado para la entrega final de la materia Front End I de la carrera CTD de Digital House. Consiste en un maquetado en HTML y CSS de una landing page a partir de un figma brindado por la institución.</p>
                                    <a target='_blank' href="https://proyecto-manage.netlify.app/">Ir al proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="/rentcar.png" alt="imagen-proyecto" />
                                    <h3>Digital RentCar</h3>
                                    <div className='techs'>
                                        <span>REACT</span>
                                        <span>SASS</span>
                                        <span>JAVA</span>
                                        <span>SPRING</span>
                                        <span>SQL</span>
                                    </div>
                                    <p>Proyecto final de la carrera CTD de Digital House. Se trabajó en equipo mediante la metodología ágil SCRUM y se completó el proyecto en 4 sprints de 2 semanas de duración. Consiste en una plataforma de alquiler de vehiculos.</p>
                                    <a target='_blank' href="http://grupo5-c2.s3-website.us-east-2.amazonaws.com/">Ir al proyecto</a>
                                </div>
                            </div>
                        </article>
                    : ''
                }

                {
                    (currentIndex === 2) ? 
                        <article className='slide' id='slide-2'>
                            <div className='container-cards'>
                                <div className='project-card'>
                                    <img src="/petshop.png" alt="imagen-proyecto" />
                                    <h3>Petshop Front Cat&Dog</h3>
                                    <div className='techs'>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </div>
                                    <p>Maquetado de una landing page para un petshop ficticio llamado Front Cat&Dog. El diseño proviene de uno de los trabajos propuestos en la materia Front End I de la carrera CTD de Digital House.</p>
                                    <a target='_blank' href="https://proyecto-petshop.netlify.app/">Ir al proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Trabajando en esto..</h3>
                                    <div className='techs'>
                                    </div>
                                    <p></p>
                                    <a target='_blank'>Ir al proyecto</a>
                                </div>
                            </div>
                        </article>
                    : ''
                }

                {
                    (currentIndex === 3) ? 
                        <article className='slide' id='slide-3'>
                            <div className='container-cards'>
                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Trabajando en esto..</h3>
                                    <div className='techs'>
                                    </div>
                                    <p></p>
                                    <a target='_blank'>Ir al proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Trabajando en esto..</h3>
                                    <div className='techs'>
                                    </div>
                                    <p></p>
                                    <a target='_blank'>Ir al proyecto</a>
                                </div>
                            </div>
                        </article>
                    : ''
                }

            </div>

        </div>
    </section>
  )
}

export default Proyectos
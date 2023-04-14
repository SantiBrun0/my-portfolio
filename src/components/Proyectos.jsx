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
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctio acissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctio accusamissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
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
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lorem ipsum dolor s elit. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctio accusamus soluta totam corporis dolores dignissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctnissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
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
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctio accignissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
                                </div>

                                <div className='project-card'>
                                    <img src="https://cdn.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas.jpg" alt="imagen-proyecto" />
                                    <h3>Titulo Proyecto</h3>
                                    <p>Descripcion proyecto: Lore. Ad quibusdam sunt, fugiat deleniti molestias aliquam illo in veritatis distinctio accusamus soluta totam corporis dolores dignissimos voluptatem facilis fugit cupiditate debitis?</p>
                                    <a href="#">Link a proyecto</a>
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
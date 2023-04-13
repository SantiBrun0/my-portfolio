import React from 'react'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='all-container'>
            <div className='text-container'>
                <h3>Hola, mi nombre es</h3>
                <h1>Santiago Bruno</h1>
                <h3><span>Full Stack Developer</span></h3>
                <p>Egresado en abril de 2023 de la carrera Certified Tech Developer creada por Digital House en colaboración con MercadoLibre y Globant. Apasionado por la tecnología, en constante aprendizaje y con mentalidad proactiva.</p>
                <div className='social-media'>
                    <a href="#"><i class='bx bxl-github'></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                </div>
            </div>

            <div className='image-container'>
                <img src="/profile.jpg" alt="profile" className='profile'/>
            </div>
        </div>
    </section>
  )
}

export default Home
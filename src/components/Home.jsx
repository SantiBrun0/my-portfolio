import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Full Stack Developer </i>', 
                '<i>Backend Developer </i>',
                '<i>Frontend Developer </i>', 
            ],
      typeSpeed: 70,
      startDelay: 500,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      loopCount: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='home' id='home'>
        <div className='all-container'>
            <div className='text-container'>
                <h3>Hola, mi nombre es</h3>
                <h1>Santiago Bruno</h1>
                <h3>Y soy <span className='dev' ref={el}></span></h3>
                <p>Egresado en abril de 2023 de la carrera Certified Tech Developer creada por Digital House en colaboración con MercadoLibre y Globant. Apasionado por la tecnología, en constante aprendizaje y con mentalidad proactiva.</p>
                <div className='social-media'>
                    <a target='_blank' href="https://github.com/SantiBrun0"><i class='bx bxl-github'></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/santiagobrunodev/"><i class='bx bxl-linkedin-square' ></i></a>
                    <a target='_blank' href="https://www.instagram.com/sntbrn/"><i class='bx bxl-instagram' ></i></a>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=5493534010152&text=Hola%20Santiago!👋🏻%20estuve%20viendo%20tu%20portfolio💻"><i class='bx bxl-whatsapp'></i></a>
                </div>
            </div>

            <div className='image-container'>
                <img src="/profile.png" alt="profile" className='profile'/>
            </div>
        </div>
    </section>
  )
}

export default Home
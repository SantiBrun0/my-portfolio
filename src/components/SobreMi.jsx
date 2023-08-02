import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SobreMi = () => {

  const settings = {
    arrows: false,
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2
  };

  return (
    <section className='sobre-mi' id='sobre-mi'>
        <div className='all-container'>
          <section className='section-left'>
            <div className='text-container'>
              <p className='text'>Tengo 28 años y resido en la ciudad de Villa María, Córdoba, Argentina.</p>
              <p className='text'>Apasionado por la tecnología, siempre aprendiendo cosas nuevas.</p>
              <p className='text'>Músico aficionado y amante de los videojuegos.</p>
              <p className='text'>También me gusta sacar fotos.</p>
            </div>

            <div className='photos-container'>
              <Slider {...settings}>
                <div>
                  <img src="imagen1.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen2.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen3.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen4.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen5.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen6.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen7.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen8.jpg" alt="slider-img" className='slider-img' />
                </div>
                <div>
                  <img src="imagen9.jpg" alt="slider-img" className='slider-img' />
                </div>
              </Slider>
            </div>

          </section>

          <section className='section-right'>
            <h3 className='tech-stack'>Stack tecnológico:</h3>
            <div className='skills-container'>

              <div className='column-one'>
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
                  <i class='bx bxl-typescript'></i>
                  <h3>TYPESCRIPT</h3>
                </div>

                <div className='card-skill'>
                  <i class='bx bxl-react' ></i>
                  <h3>REACT</h3>
                </div>
              </div>

              <div className='column-two'>
                <div className='card-skill'>
                  <i class='bx bxl-react' ></i>
                  <h3>REACT NATIVE</h3>
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
                  <i class='bx bxl-aws'></i>
                  <h3>AWS</h3>
                </div>


                <div className='card-skill'>
                  <i class='bx bxs-data'></i>
                  <h3>SQL</h3>
                </div>
              </div>


            </div>
          </section>


        </div>
    </section>
  )
}

export default SobreMi
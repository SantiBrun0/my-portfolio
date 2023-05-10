import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import useScreenSize from "../hooks/useScreenSize";

export default function Carrusel() {

  const { width } = useScreenSize()
console.log(width);
  return (
    <>
        <div className="carrusel-container">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={
                    (width <= 425) ?
                    {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    } 
                    :
                    {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }
                }
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
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
                </SwiperSlide>

                <SwiperSlide>
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
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/petshop.png" alt="imagen-proyecto" />
                        <h3>Petshop Cat&Dog</h3>
                        <div className='techs'>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <p>Maquetado de una landing page para un petshop ficticio llamado Front Cat&Dog. El diseño proviene de uno de los trabajos propuestos en la materia Front End I de la carrera CTD de Digital House.</p>
                        <a target='_blank' href="https://proyecto-petshop.netlify.app/">Ir al proyecto</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/devatwork.png" alt="imagen-proyecto" />
                        <h3>Trabajando..</h3>
                        <div className='techs'>
                        </div>
                        <p></p>
                        <a target='_blank'>Ir al proyecto</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/devatwork.png" alt="imagen-proyecto" />
                        <h3>Trabajando..</h3>
                        <div className='techs'>
                        </div>
                        <p></p>
                        <a target='_blank'>Ir al proyecto</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/devatwork.png" alt="imagen-proyecto" />
                        <h3>Trabajando..</h3>
                        <div className='techs'>
                        </div>
                        <p></p>
                        <a target='_blank'>Ir al proyecto</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  );
}

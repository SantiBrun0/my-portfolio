import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import useScreenSize from "../hooks/useScreenSize";

export default function Carrusel() {

  const { width } = useScreenSize()

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
                        <img src="/games-store.png" alt="imagen-proyecto" />
                        <h3>Games Store</h3>
                        <div className='techs'>
                            <span>REACT</span>
                            <span>SASS</span>
                            <span>SPRING</span>
                            <span>SQL</span>
                            <span>AWS</span>
                        </div>
                        <p>E-commerce desarrollado completamente por mí, desde el frontend y backend, hasta la infraestructura y despliegue en AWS. Es un proyecto en el que se pueden ver claramente mis competencias como desarrollador full stack.</p>
                        <a target='_blank' href="http://games-store-bucket.s3-website.us-east-2.amazonaws.com/">Ir al proyecto</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/pokedex.png" alt="imagen-proyecto" />
                        <h3>Pokédex APP</h3>
                        <div className='techs'>
                            <span>REACT NATIVE</span>
                            <span>TYPESCRIPT</span>
                        </div>
                        <p>Aplicación mobile de la famosa y popular Pokédex, desarrollada en React Native con Typescript. El link redirecciona a la publicación en LinkedIn donde está el video demostración.</p>
                        <a target='_blank' href="https://www.linkedin.com/feed/update/urn:li:activity:7080535959666139136/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7080535959666139136%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29">Ir a la demo</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/todoapp.png" alt="imagen-proyecto" />
                        <h3>To-Do App</h3>
                        <div className='techs'>
                            <span>REACT</span>
                            <span>CSS</span>
                        </div>
                        <p>Clásica aplicación To-Do realizada en React y CSS, sin utilizar ninguna librería. Contiene un modo noche y esta diseñada para pantallas mobile.</p>
                        <a target='_blank' href="https://todoappsb.netlify.app/">Ir al proyecto</a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='project-card'>
                        <img src="/peliculas.png" alt="imagen-proyecto" />
                        <h3>Peliculas APP</h3>
                        <div className='techs'>
                            <span>REACT NATIVE</span>
                            <span>TYPESCRIPT</span>
                        </div>
                        <p>Aplicación mobile para consultar peliculas, desarrollada en React Native con Typescript. El link redirecciona a la publicación en LinkedIn donde está el video demostración.</p>
                        <a target='_blank' href="https://www.linkedin.com/feed/update/urn:li:activity:7079105576873394176/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7079105576873394176%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29">Ir a la demo</a>
                    </div>
                </SwiperSlide>

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
                        <a target='_blank' href="http://deploy-front-pi.s3-website.us-east-2.amazonaws.com/">Ir al proyecto</a>
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
            </Swiper>
        </div>
    </>
  );
}

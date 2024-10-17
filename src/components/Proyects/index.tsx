"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';


export const ProyectsComponent = () => {
  const arrayDeProyectos = [
    {
      nombre: 'Gif App',
      url: 'https://iantarquini15.github.io/gifApp/',
      imagen: '/assets/gifapp.png', // Cambié esto para que sea la ruta correcta en tu proyecto
      skills: ['React', 'HTTP Petitions', 'API'],
    },
    {
      nombre: 'Heros App',
      url: 'https://iantarquini15.github.io/heroApp/#/login',
      imagen: '/assets/herosapp.png',
      skills: ['React', 'Express', 'MongoDB'],
    },
    {
      nombre: 'Journal App',
      url: 'https://iantarquini15.github.io/journalApp/',
      imagen: '/assets/journalapp.png',
      skills: ['React', 'Express', 'MongoDB', 'Axios'],
    },
    {
      nombre: 'iSecret',
      url: 'https://pm-4-fe-ianta0715-945a.vercel.app/',
      imagen: '/assets/iSecret.png',
      skills: ['NextJS', 'Express', 'PostgreSQL', 'TypeScript', 'Axios', 'UX/UI'],
    },
  ];

  return (
    <div className="projects-carousel">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {arrayDeProyectos.map((proyecto, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <Link href={proyecto.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  width={500}
                  height={200}
                  objectFit="cover"
                />
              </Link>
              <h3>{proyecto.nombre}</h3>
              <p className='mb-5'>{proyecto.skills.join(', ')}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

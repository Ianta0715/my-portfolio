// Asegura que este componente se ejecute solo en el lado del cliente
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import gifApp from '../../../public/assets/gifapp.png';
import journalApp from '../../../public/assets/journalapp.png';
import ecommerce from '../../../public/assets/iSecret.png';
import herosApp from '../../../public/assets/herosapp.png';

export const ProyectsComponent = () => {

    const arrayDeProyectos = [
        {
            nombre: 'Gif App',
            url: 'https://iantarquini15.github.io/gifApp/',
            imagen: gifApp,
            skills: ['React', 'HTTP Petitions', 'API']
        },
        {
            nombre: 'Heros App',
            url: 'https://iantarquini15.github.io/heroApp/#/login',
            imagen: herosApp,
            skills: ['React', 'Express', 'MongoDB']
        },
        {
            nombre: 'Journal App',
            url: 'https://iantarquini15.github.io/journalApp/',
            imagen: journalApp,
            skills: ['React', 'Express', 'MongoDB', 'Axios']
        },
        {
            nombre: 'iSecret',
            url: 'https://pm-4-fe-ianta0715-945a.vercel.app/',
            imagen: ecommerce,
            skills: ['NextJS', 'Express', 'PostgreSQL', 'TypeScript', 'Axios', 'UX/UI']
        }
    ];

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            className="mySwiper"
        >
            {arrayDeProyectos.map((proyecto, index) => (
                <SwiperSlide key={index}>
                    <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                        <div className="card bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <Image
                                src={proyecto.imagen}
                                alt={proyecto.nombre}
                                className="rounded-lg w-full h-auto"
                            />
                            <h3 className='text-xl font-bold mt-4'>{proyecto.nombre}</h3>
                            <ul className='list-disc list-inside mt-2'>
                                {proyecto.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className='text-black'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

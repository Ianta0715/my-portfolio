"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProyectsComponent = () => {
  const arrayDeProyectos = [
    {
      nombre: 'iSecret',
      url: 'https://pm-4-fe-ianta0715-945a.vercel.app/',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/iSecret.png',
      skills: ['NextJS', 'Express', 'PostgreSQL', 'TypeScript', 'Axios', 'UX/UI'],
      descripcion: 'A full-stack social platform with modern authentication and real-time features.',
      destacado: true
    },
    {
      nombre: 'AiDactic',
      url: 'https://dev.aidactic.com',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/aidactic.png',
      skills: ['NextJS', 'React-admin', 'GraphQL', 'TypeScript', 'Axios', 'UX/UI','Rive animations'],
      descripcion: 'A full-stack learning platform with modern authentication and real-time features that you can create and take diferent courses.',
      destacado: true
    },
    {
      nombre: 'Journal App',
      url: 'https://iantarquini15.github.io/journalApp/',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/journalapp.png',
      skills: ['React', 'Express', 'MongoDB', 'Axios'],
      descripcion: 'Personal journal application with CRUD operations and user authentication.',
      destacado: false
    },
    {
      nombre: 'Box Fit',
      url: 'https://gym-repo-rust.vercel.app/home',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/boxfit.png',
      skills: ['vite', 'node', 'postgreSQL', 'Axios', 'vercel','render'],
      descripcion: 'Fitness application with workout tracking and user authentication.',
      destacado: false
    },
    {
      nombre: 'Heroes App',
      url: 'https://iantarquini15.github.io/heroApp/#/login',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/herosapp.png',
      skills: ['React', 'Express', 'MongoDB'],
      descripcion: 'Superhero database application with search and filtering capabilities.',
      destacado: false
    },
    {
      nombre: 'Gif App',
      url: 'https://iantarquini15.github.io/gifApp/',
      github: 'https://github.com/Ianta0715',
      imagen: '/assets/gifapp.png',
      skills: ['React', 'HTTP Petitions', 'API'],
      descripcion: 'Interactive GIF search application using external APIs.',
      destacado: false
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="pt-24 pb-20 bg-transparent text-white relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 relative z-40"
        >          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 pt-8"
          >
            Featured &lt;Projects&gt;
          </motion.h2>          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-carousel"
        >
          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation
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
            className="projects-swiper"
          >
            {arrayDeProyectos.map((proyecto) => (
              <SwiperSlide key={proyecto.nombre}>
                <div className={`project-card group ${proyecto.destacado ? 'featured' : ''}`}>
                  {proyecto.destacado && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Link 
                        href={proyecto.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-5 h-5" />
                      </Link>
                      <Link 
                        href={proyecto.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{proyecto.nombre}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{proyecto.descripcion}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

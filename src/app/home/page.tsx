"use client"
import Image from 'next/image';
import imagenDePerfil from '../../../public/assets/fotoPerfil.jpeg';
import './homePage.css';
import { ProyectsComponent } from '@/components/Proyects';
import { Tecnologies } from '@/components/Tecnologies';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importa motion

const HomePage = () => {
  return (
    <>
      <main>
        <section className="no-parallax flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-8 p-4">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }} // Efecto inicial
            whileInView={{ opacity: 1, x: 0 }} // Efecto al hacer scroll
            transition={{ duration: 1 }} // Duración de la animación
          >
            <h1 className="text-3xl font-bold">Hi, I&apos;m Ian Tarquini</h1>
            <h3 className="font-semibold mt-2 text-blue-500">Full Stack/Frontend Developer</h3>
            <p className="mt-2 text-lg">
              I am a frontend developer. My passion is to create attractive and functional web interfaces that provide amazing experiences for users. I enjoy combining modern design with clean code to ensure that each project not only looks good but also functions efficiently. I am always looking for new challenges and opportunities to continue learning and growing in the world of frontend development.
            </p>
            <div className="flex flex-row lg:justify-start space-x-4 mt-8">
              <Link href='https://www.linkedin.com/in/ian-tarquini-b83b72247/' target='_blank' rel='noopener noreferrer'>
                <button className="text-white px-4 py-2 rounded transition-transform duration-700 ease-in-out transform hover:scale-95 hover:bg-blue-600 flex items-center">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2 w-6 h-6" />
                  LinkedIn
                </button>
              </Link>
              <Link href='https://github.com/Ianta0715' target='_blank' rel='noopener noreferrer'>
                <button style={{ backgroundColor: '#7A42C6' }} className="text-white px-4 py-2 rounded transition-transform duration-700 ease-in-out transform hover:scale-95 hover:bg-gray-700 flex items-center">
                  <FontAwesomeIcon icon={faGithub} className="mr-2 w-6 h-6" />
                  GitHub
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="button-git relative">
              <motion.div
                initial={{ opacity: 3, scale: 0.8 }} // Efecto inicial
                whileInView={{ opacity: 4, scale: 1 }} // Efecto al hacer scroll
                transition={{ duration: 1 }} // Duración de la animación
              >
                <Image
                  alt="imagen de perfil"
                  src={imagenDePerfil}
                  className="w-96 h-96 ml-1 rounded-full object-cover shadow-lg transition-transform duration-700 ease-in-out transform hover:scale-95"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="parallax bg flex flex-col mb-5">
          <Tecnologies />
        </section>

        <section className="no-parallax flex flex-col items-center space-y-4 p-4">
          <div className='block text-center'>
            <h2 className="text-5xl font-bold mb-5 ">Some of my &lt; Proyects &gt;</h2>
          </div>
         
            <ProyectsComponent />
          
        </section>
      </main>
    </>
  );
};

export default HomePage;

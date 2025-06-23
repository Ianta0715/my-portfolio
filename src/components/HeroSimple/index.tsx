"use client";
import Image from 'next/image';
import imagenDePerfil from '../../../public/assets/fotoPerfil.jpeg';

export const HeroSimple = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ian Tarquini
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              I&apos;m a{' '}
              <span className="text-blue-400 font-semibold">
                Full Stack Developer
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              I create beautiful and functional web applications that provide amazing user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                View My Work
              </button>
              
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                alt="Ian Tarquini profile picture"
                src={imagenDePerfil}
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

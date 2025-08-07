"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import imagenDePerfil from '../../../public/assets/CV.png';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(75);
      } else {
        setCurrentText(prev => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return <span>{currentText}<span className="animate-pulse">|</span></span>;
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section flex flex-col items-start sm:flex-row sm:items-center justify-center bg-transparent text-white pt-4 sm:pt-10 pb-8 min-h-[500px] sm:min-h-[600px]"
      style={{ scrollMarginTop: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ian Tarquini
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
            >
              I&apos;m a{' '}
              <span className="text-blue-400 font-semibold">
                <TypewriterEffect 
                  words={['Full Stack Developer', 'Frontend Developer', 'React Developer', 'Problem Solver']}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              I create beautiful and functional web applications that provide amazing user experiences. 
              I&apos;m passionate about combining modern design with clean code to build scalable solutions.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <Link 
                href='https://www.linkedin.com/in/ian-tarquini-b83b72247/' 
                target='_blank' 
                rel='noopener noreferrer'
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </Link>
              
              <Link 
                href='https://github.com/Ianta0715' 
                target='_blank' 
                rel='noopener noreferrer'
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </Link>
                <button className="text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <Image
                  alt="Ian Tarquini profile picture"
                  src={imagenDePerfil}
                  className="w-40 h-40 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl"
                  priority
                />
              </motion.div>
              
              {/* Animated background circles */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

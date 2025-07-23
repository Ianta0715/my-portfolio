"use client";
import { motion } from 'framer-motion';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Contact = () => {
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
    <section id="contact" className="py-20 bg-transparent text-white relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Let&apos;s connect!
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="w-8 h-8 text-blue-400" />
                  <div className="text-left">
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+5426150430000" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                      +54 2615043000
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 text-blue-400" />
                  <div className="text-left">
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:iantarquini4@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                      iantarquini4@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-6 text-white">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://www.linkedin.com/in/ian-tarquini-b83b72247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
                </Link>
                <Link
                  href="https://github.com/Ianta0715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

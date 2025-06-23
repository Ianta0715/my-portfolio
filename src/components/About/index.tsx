"use client";
import { motion } from 'framer-motion';

export const About = () => {
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

  return (    <section id="about" className="py-20 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              I am a passionate Full Stack Developer with a strong focus on Frontend development. 
              My journey in web development began with a curiosity for creating beautiful and 
              functional digital experiences that make a real impact on users&apos; lives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-4">My Focus</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in creating responsive, user-friendly web applications using modern 
                    technologies like React, Next.js, and TypeScript. I believe in writing clean, 
                    maintainable code that scales well.
                  </p>
                </div>
              </motion.div>
                <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-4">My Passion</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I&apos;m constantly learning and staying up-to-date with the latest web technologies. 
                    I enjoy solving complex problems and turning creative ideas into functional, 
                    beautiful web experiences.
                  </p>
                </div>
              </motion.div>
                <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    With experience in both frontend and backend development, I can handle 
                    full-stack projects from conception to deployment, ensuring seamless 
                    integration between all parts of the application.
                  </p>
                </div>
              </motion.div>                <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Goal</h3>
                  <p className="text-gray-300 leading-relaxed">
                    My goal is to continue growing as a developer while contributing to meaningful 
                    projects that solve real-world problems and provide excellent user experiences.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-semibold text-white mb-4">DevOps & Admin</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I have hands-on experience with React-Admin for building admin panels, Docker for containerization, 
                    and Kubernetes for orchestrating scalable applications. This allows me to handle both development 
                    and deployment aspects of modern web applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

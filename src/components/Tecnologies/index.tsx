"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Tecnologies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const technologies = [
    { src: "/assets/nextJS.png", alt: "NextJS", link: "https://nextjs.org/", category: "Frontend" },
    { src: "/assets/react.png", alt: "React", link: "https://reactjs.org/", category: "Frontend" },
    { src: "/assets/ts.png", alt: "TypeScript", link: "https://www.typescriptlang.org/", category: "Language" },
    { src: "/assets/js.png", alt: "JavaScript", link: "https://www.javascript.com/", category: "Language" },
    { src: "/assets/tailwind.jpg", alt: "Tailwind CSS", link: "https://www.tailwindcss.com/", category: "Styling" },
    { src: "/assets/css3.png", alt: "CSS3", link: "https://www.w3schools.com/css/", category: "Styling" },
    { src: "/assets/html5.png", alt: "HTML5", link: "https://en.wikipedia.org/wiki/HTML5", category: "Markup" },
    { src: "/assets/redux.png", alt: "Redux", link: "https://redux.js.org/", category: "State Management" },
    { src: "/assets/mui.png", alt: "Material UI", link: "https://mui.com/", category: "UI Library" },
    { src: "/assets/figma.png", alt: "Figma", link: "https://www.figma.com/", category: "Design" },
    { src: "/assets/node.png", alt: "Node.js", link: "https://nodejs.org/", category: "Backend" },
    { src: "/assets/express.png", alt: "Express.js", link: "https://expressjs.com/", category: "Backend" },
    { src: "/assets/mongodb1.png", alt: "MongoDB", link: "https://www.mongodb.com/", category: "Database" },    { src: "/assets/postgreSQL2.png", alt: "PostgreSQL", link: "https://www.postgresql.org/", category: "Database" },
    { src: "/assets/git.png", alt: "Git", link: "https://github.com/", category: "Version Control" },
    { src: "/assets/gnubash.png", alt: "Bash", link: "https://www.gnu.org/software/bash/", category: "Tools" },
    { src: "/assets/react-admin-foto.png", alt: "React-Admin", link: "https://marmelab.com/react-admin/", category: "Admin Panel" },
    { src: "/assets/docker-foto.png", alt: "Docker", link: "https://www.docker.com/", category: "DevOps" },
    { src: "/assets/kubernetes-foto.png", alt: "Kubernetes", link: "https://kubernetes.io/", category: "DevOps" },
  ];
  return (    <section id="skills" className="pt-20 pb-16 bg-transparent text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I work with modern technologies to build scalable and efficient web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.alt}
              variants={techVariants}
              className="group"
            >
              <Link href={tech.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-white/15 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="relative">
                    <Image 
                      src={tech.src} 
                      alt={tech.alt} 
                      width={80} 
                      height={80} 
                      className="w-16 h-16 mx-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>                  <h3 className="text-sm font-medium text-white mt-3 text-center">
                    {tech.alt}
                  </h3>
                  <p className="text-xs text-gray-300 text-center mt-1">
                    {tech.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
                </p>
              </div>
            </div>            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Building robust APIs and server-side applications using Node.js, Express, and various databases.
                </p>
              </div>
            </div>            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Full Stack Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Seamlessly connecting frontend and backend systems to create complete web applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

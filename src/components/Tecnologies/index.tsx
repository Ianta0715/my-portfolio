"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Tecnologies = () => {
  const techVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <h2 className="text-center text-5xl mb-6 p-5">Technologies</h2>
      <div className="technologies-container">
        <div className="technology-category my-4">
          <div className="tech-icons grid grid-cols-4 gap-10 justify-center">
            {[
              { src: "/assets/nextJS.png", alt: "NextJS", link: "https://nextjs.org/" },
              { src: "/assets/react.png", alt: "React", link: "https://reactjs.org/" },
              { src: "/assets/css3.png", alt: "CSS3", link: "https://www.w3schools.com/css/" },
              { src: "/assets/html5.png", alt: "HTML5", link: "https://en.wikipedia.org/wiki/HTML5" },
              { src: "/assets/js.png", alt: "JavaScript", link: "https://www.javascript.com/" },
              { src: "/assets/ts.png", alt: "TypeScript", link: "https://www.typescriptlang.org/" },
              { src: "/assets/redux.png", alt: "Redux", link: "https://redux.js.org/" },
              { src: "/assets/tailwind.jpg", alt: "Tailwind CSS", link: "https://www.tailwindcss.com/" },
              { src: "/assets/mui.png", alt: "Material UI", link: "https://mui.com/" },
              { src: "/assets/figma.png", alt: "Figma", link: "https://www.figma.com/" },
              { src: "/assets/node.png", alt: "Node.js", link: "https://nodejs.org/" },
              { src: "/assets/express.png", alt: "Express.js", link: "https://expressjs.com/" },
              { src: "/assets/mongodb1.png", alt: "mongoDB", link: "https://www.mongodb.com/" },
              { src: "/assets/postgreSQL2.png", alt: "PostgreSQL", link: "https://www.postgresql.org/" },
              { src: "/assets/git.png", alt: "Git", link: "https://github.com/" },
              { src: "/assets/gnubash.png", alt: "Bash", link: "https://www.gnu.org/software/bash/" },
            ].map((tech, index) => (
              <Link key={tech.alt} href={tech.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={techVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  
                >
                  <Image src={tech.src} alt={tech.alt} width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

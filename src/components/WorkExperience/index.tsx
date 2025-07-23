import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Continental Venture Capital',
    period: 'January - July 2025',
    role: 'Full-Stack Developer',
    description: 'Developing with React, TypeScript, Next.js, Node.js, and Express. Experienced in UI/UX design (Figma) and implementing CI/CD pipelines with Docker, Kubernetes, AWS and animation with Rive.'
  },
  {
    company: 'Si voy',
    period: 'September - October 2024',
    role: 'Frontend Developer',
    description: 'We worked intensely with my team of developers for one month to make this project accessible for people with disabilities.'
  },
  {
    company: 'Decode',
    period: 'April - August 2023',
    role: 'Database Performance Technician',
    description: 'Improved database performance during audits and proposed process optimizations.'
  }
];

export const WorkExperience = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full flex flex-col items-center py-8">
      <h2 className="text-4xl font-bold mb-6 text-white">Work Experience</h2>
      <div className="w-full max-w-2xl space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg flex flex-col items-start space-y-1 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-sm text-gray-300 font-medium">
              <span className="text-white font-semibold">{exp.company}</span>
              <span className="text-xs text-gray-400 ml-2">{exp.period}</span>
            </span>
            <span className="text-xs text-gray-400">{exp.role}</span>
            <span className="text-xs text-gray-300">{exp.description}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

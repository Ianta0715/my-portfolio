"use client";
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Ian Tarquini</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            
            <div className="text-gray-400">
              <p>&copy; {currentYear} Ian Tarquini. All rights reserved.</p>
              <p className="text-sm mt-1">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Designed and developed with ❤️ by Ian Tarquini
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

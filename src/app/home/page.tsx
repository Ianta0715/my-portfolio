"use client"
import './homePage.css';
import { ProyectsComponent } from '@/components/Proyects';
import { Tecnologies } from '@/components/Tecnologies';
import { WorkExperience } from '@/components/WorkExperience';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Tecnologies />
        <WorkExperience />
        <ProyectsComponent />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;

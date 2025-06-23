"use client"
import './homePage.css';
import { ProyectsComponent } from '@/components/Proyects';
import { Tecnologies } from '@/components/Tecnologies';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tecnologies />
        <ProyectsComponent />
        <Contact />
      <Footer />
      </main>
    </>
  );
};

export default HomePage;

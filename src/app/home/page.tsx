import Image from 'next/image';
import imagenDePerfil from '../../../public/assets/fotoPerfil.jpeg';
import './homePage.css';
import { ProyectsComponent } from '@/components/Proyects';


 const HomePage = () => {
  return (
    <>
    <main>
    <section className="no-parallax flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-8 p-4">
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-3xl font-bold">Hi, I'm Ian Tarquini</h1>
    <h3 className="font-semibold mt-2 text-blue-500">Frontend Developer</h3>
    <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis und ipsam tenetur qui delectus soluta provident tempora maiores enim facilis.</p>
    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-700 ease-in-out transform hover:scale-95 hover:bg-gray-700">Hire me</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded transition-transform duration-700 ease-in-out transform hover:scale-95 hover:bg-gray-700">Let's Talk</button>
    </div>
  </div>

  <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
  <Image
    alt="imagen de perfil"
    src={imagenDePerfil}
    className="w-96 h-96 ml-5 rounded-full object-cover shadow-lg transition-transform duration-700 ease-in-out transform hover:scale-95 hover:bg-gray-700"
  />
</div>

</section>




        <section className="parallax bg flex flex-col mb-5">
           

        </section>
        <section className="no-parallax flex flex-col items-center space-y-4 p-4">
    <div className='block text-center'>
        <h1 className="text-3xl font-bold">Some of my &lt; Proyects &gt;</h1>
    </div>
    <ProyectsComponent />
</section>

    </main>
    </>
  )
}
export default HomePage;

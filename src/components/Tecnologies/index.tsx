
import Image from 'next/image';
import Link from 'next/link';


export const Tecnologies = () => {
  return (
    <div>
       
  <h2 className="text-center text-5xl mb-6 p-5">Technologies</h2>
  <div className="technologies-container">
  <div className="technology-category my-4">

    <div className="tech-icons grid grid-cols-4 gap-10 justify-center">
      <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/nextJS.png" alt="NextJS" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/react.png" alt="React" width={192} height={192} className="rounded-full w-32 h-32 object-contain" />
      </Link>
      <Link href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/css3.png" alt="CSS3" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/html5.png" alt="HTML5" width={192} height={192} className="rounded-full w-32 h-32 object-contain" />
      </Link>
      <Link href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/js.png" alt="JavaScript" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/ts.png" alt="TypeScript" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/redux.png" alt="Redux" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.tailwindcss.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/tailwind.jpg" alt="Tailwind CSS" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/mui.png" alt="Material UI" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/figma.png" alt="Figma" width={192} height={192} className="rounded-full w-32 h-32 object-contain" />
      </Link>
      <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/node.png" alt="Node.js" width={192} height={192} className="rounded-full w-32 h-32 object-contain" />
      </Link>
      <Link href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/express.png" alt="Express.js" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/mongodb1.png" alt="mongoDB" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/postgreSQL2.png" alt="PostgreSQL" width={192} height={192} className="rounded-full w-32 h-32 object-contain" />
      </Link> 
      <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/git.png" alt="Git" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
      <Link href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer" >
        <Image src="/assets/gnubash.png" alt="Bash" width={192} height={192} className="rounded-full w-32 h-32 object-cover" />
      </Link>
    </div>
  </div>

  
   
    
    
  
</div>


    </div>
  )
}

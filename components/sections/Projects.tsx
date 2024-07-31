import { RefObject } from "react";
import RevealAnimate from "../RevealAnimate";
import Link from "next/link";
import Card from "../Card";

type Props = {
  sectionRef : RefObject<HTMLDivElement>
}


const ProjectSection = ({sectionRef} : Props) => {
  return (
    <div ref={sectionRef} className="mt-20 mb-10 max-w-[1300px] mx-auto w-[80%] lg:w-full lg:px-5 xl:px-0">
      <RevealAnimate className="text-5xl text-white tracking-widest text-center" direction="x">
        <p>Projects</p>
      </RevealAnimate>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 my-5">
        <Card
          title="SwiftShop"
          link="https://swiftshop-alpha.vercel.app/"
          gitLink="https://github.com/GummyJohn/swiftshop"
          img="/swiftshop.jpg"
          description="Ecomm webiste with full cart functionality"
          tags={['NextJS', 'Supabase', 'Tailwind', 'Responsive', 'Typescript']}
        />

        <Card
          title="Inventory Management"
          link="https://inventorycrud.vercel.app/"
          gitLink="https://github.com/GummyJohn/inventory-frontend-nextjs"
          img="/inventoryCRUD.png"
          description="Self Made Inventory Management API enabling users to create, update, delete, and restore products"
          tags={['NodeJS', 'NextJS', 'Tailwind', 'Responsive', 'Express', 'MongoDB', 'Typescript']}
        />
      </div>


      <RevealAnimate className="text-center" direction="y">
        <Link  href="/projects" className="bg-orange-500 py-3 px-6 my-5 rounded-xl hover:bg-orange-800 hover:text-white">
          View All
        </Link>
      </RevealAnimate>
    </div>
  );
};

export default ProjectSection;

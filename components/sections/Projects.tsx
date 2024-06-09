import { RefObject } from "react";
import ProjectCard from "../ProjectCard";
import RevealAnimate from "../RevealAnimate";

type Props = {
  sectionRef : RefObject<HTMLDivElement>
}


const ProjectSection = ({sectionRef} : Props) => {
  return (
    <div ref={sectionRef} className="mt-20 mb-10 max-w-[1300px] mx-auto w-[80%] lg:w-full lg:px-5 xl:px-0">
      <RevealAnimate className="text-5xl text-white tracking-widest text-center" direction="x">
        <p>Projects</p>
      </RevealAnimate>

      <RevealAnimate className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 my-5" direction="x">
        <ProjectCard
          title="SwiftShop"
          link="https://swiftshop-chi.vercel.app/"
          gitLink="https://github.com/GummyJohn/swiftshop"
          img="/swiftshop.jpg"
          description="Ecomm webiste with full cart functionality"
          tags={['NextJS', 'Supabase', 'Tailwind', 'Responsive']}
        />

        <ProjectCard
          title="RecipeHub"
          link="https://recipehub-swart.vercel.app/"
          gitLink="https://github.com/GummyJohn/recipe_nextjs"
          img="/recipehub.jpg"
          description="Recipe Hub where user can explore new recipe and customize their personal recipe list"
          tags={['API', 'NextJS', 'Tailwind', 'Responsive']}
        />
      </RevealAnimate>

      <RevealAnimate className="text-center" direction="x">
        <button className="bg-orange-500 py-3 px-6 my-5 rounded-xl hover:bg-orange-800 hover:text-white">
          View All
        </button>
      </RevealAnimate>
    </div>
  );
};

export default ProjectSection;

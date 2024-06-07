import {RefObject} from "react";
import ProjectCard from "../ProjectCard";
import {
  ApiTag,
  NextjsTag,
  ResponsiveTag,
  TailwindTag,
  SupabaseTag,
} from "../tags";

type Props = {
  sectionRef : RefObject<HTMLDivElement>
}


const ProjectSection = ({sectionRef} : Props) => {
  return (
    <div ref={sectionRef} className="mt-16 mb-10 max-w-[1300px] mx-auto w-[80%] lg:w-full lg:px-5 xl:px-0">
      <h2 className="text-5xl text-white tracking-widest text-center">
        Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          title="SwiftShop"
          link="https://swiftshop-chi.vercel.app/"
          gitLink="https://github.com/GummyJohn/swiftshop"
          img="/swiftshop.jpg"
          description="Ecomm webiste with full cart functionality"
          tags={[
            <NextjsTag key={0} />,
            <SupabaseTag key={1} />,
            <TailwindTag key={2} />,
            <ResponsiveTag key={3} />,
          ]}
        />

        <ProjectCard
          title="RecipeHub"
          link="https://recipehub-swart.vercel.app/"
          gitLink="https://github.com/GummyJohn/recipe_nextjs"
          img="/recipehub.jpg"
          description="Recipe Hub where user can explore new recipe and customize their personal recipe list"
          tags={[
            <ApiTag key={0} />,
            <NextjsTag key={1} />,
            <SupabaseTag key={2} />,
            <TailwindTag key={3} />,
            <ResponsiveTag key={4} />,
          ]}
        />
      </div>

      <div className="text-center">
        <button className="bg-orange-500 py-3 px-6 my-5 rounded-xl hover:bg-orange-800 hover:text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;

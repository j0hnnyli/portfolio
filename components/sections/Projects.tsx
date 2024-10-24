import { RefObject } from "react";
import RevealAnimate from "../RevealAnimate";
import Link from "next/link";
import Card from "../Card";
import projects from "@/lib/content/projects";

type Props = {
  sectionRef: RefObject<HTMLDivElement>;
};

const ProjectSection = ({ sectionRef }: Props) => {
  return (
    <div
      ref={sectionRef}
      className="mt-20 mb-10 max-w-[1300px] mx-auto w-[80%] lg:w-full lg:px-5 xl:px-0"
    >
      <RevealAnimate
        className="text-5xl text-white tracking-widest text-center"
        direction="x"
      >
        <p>
          <span className="text-secondary_orange border-b-2 border-b-secondary_orange">P</span>
          rojects
        </p>
      </RevealAnimate>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
        {projects.map(({title, link, gitLink, img, tags, type}) => (
          <Card
            key={title}
            title={title}
            link={link}
            gitLink={gitLink}
            img={img}
            tags={tags}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

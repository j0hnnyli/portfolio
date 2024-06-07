import { RefObject } from "react";

type Props = {
  sectionRef : RefObject<HTMLDivElement>
}

const AboutSection = ({sectionRef} : Props) => {
  return (
    <div
      ref={sectionRef} 
      className="mt-20 md:w-[80%] max-w-[1300px] mx-auto px-5"
    >
      <h2 className="tracking-widest text-5xl text-white font-bold">About</h2>

      <div className="md:pl-20 my-5">
        <p className="text-white text-xl">
          <span className="text-2xl text-orange-500">Hello</span> I&apos;m
          Johnny Li, a self-taught Developer on a journey towards a career in
          software engineering. My codoing journey started as an exploration
          starting with HTML and CSS. The mark up langauge and cascading style
          sheets empowered me to start building static websites. However, this
          only made me want to learn more and build a website with user
          interaction, this is where I picked up Javascript. Javascript opened
          the door into frameworks, like React and Nextjs. With these knowledge
          and tools at my disposable, I&apos;m able to build dyanmics and UI/UX
          friendly websites. Now I learning algorithms, and trying to unraveling
          their mysteries.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

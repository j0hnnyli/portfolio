import { RefObject } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiTelevisionFill } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";
import { MdGames } from "react-icons/md";


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


      <h2 className="tracking-widest text-5xl text-white font-bold">Hobbies</h2>

      <div className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-between">
        <div className="flex flex-col justify-center items-center mb-2">
          <GiWeightLiftingUp className="text-orange-500 text-8xl"/>
          <h2 className="text-xl tracking-widest text-white">Exercise</h2>
        </div>
        
        <div className="flex flex-col justify-center items-center mb-2">
          <PiTelevisionFill className="text-orange-500 text-8xl"/>
          <h2 className="text-xl tracking-widest text-white">Anime</h2>
        </div>

        <div className="flex flex-col justify-center items-center mb-2">
          <FaPaperPlane className="text-orange-500 text-8xl"/>
          <h2 className="text-xl tracking-widest text-white">Origami</h2>
        </div>
        
        <div className="flex flex-col justify-center items-center mb-2">
          <MdGames className="text-orange-500 text-8xl"/>
          <h2 className="text-xl tracking-widest text-white">Video Games</h2>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;

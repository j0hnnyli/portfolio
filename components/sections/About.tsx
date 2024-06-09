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
          Johnny Li, a self-taught developer on a journey towards a career in software engineering. My coding journey started as an exploration, beginning with HTML and CSS. The markup language and cascading style sheets empowered me to start building static websites. However, this only made me want to learn more and build websites with user interaction. This is where I picked up JavaScript. JavaScript opened the door to frameworks like React and Next.js. With this knowledge and these tools at my disposal, I&apos;m able to build dynamic and user-friendly UI/UX websites. Now I&apos;m learning algorithms and trying to unravel their mysteries
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

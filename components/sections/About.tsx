import { RefObject } from "react";
import RevealAnimate from "../RevealAnimate";

type Props = {
  sectionRef: RefObject<HTMLDivElement>;
};

const AboutSection = ({ sectionRef }: Props) => {
  return (
    <div
      ref={sectionRef}
      className="mt-20 md:w-[80%] max-w-[1300px] mx-auto px-5"
    >
      <RevealAnimate className="tracking-widest text-5xl text-white font-bold" direction="x">
        <p className="border-b-secondary_orange border-b-2">
          <span className="text-secondary_orange">A</span>bout
        </p>
      </RevealAnimate>

      <RevealAnimate className="md:pl-20 my-5" direction="x">
        <p className="text-white text-xl">
          <span className="text-2xl text-secondary_orange">Hello</span> I&apos;m
          Johnny Li, a self-taught developer on a journey towards a career in
          software engineering. My coding journey started as an exploration,
          beginning with HTML and CSS. The markup language and cascading style
          sheets empowered me to start building static websites. However, this
          only made me want to learn more and build websites with user
          interaction. This is where I picked up JavaScript. JavaScript opened
          the door to frameworks like React and Next.js. With this knowledge and
          these tools at my disposal, I&apos;m able to build dynamic and
          user-friendly UI/UX websites. Now I&apos;m learning algorithms and
          trying to unravel their mysteries
        </p>
      </RevealAnimate>
    </div>
  );
};

export default AboutSection;

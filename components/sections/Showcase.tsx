import { RefObject } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import TypeWriter from "../TypeWriter";
import Image from "next/image";
import Link from "next/link";
import RevealAnimate from "../RevealAnimate";

type Props = {
  sectionRef: RefObject<HTMLDivElement>;
};

const ShowCase = ({ sectionRef }: Props) => {
  return (
    <div
      ref={sectionRef}
      style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
      className="h-[90vh] relative flex flex-col-reverse lg:flex-row items-center justify-center shadow-black p-2 mt-14 max-w-[1300px] mx-auto px-5 pb-5 mb-2"
    >
      <div className="w-[90%] h-[50%] lg:w-[50%] md:flex justify-center items-center p-2">
        <RevealAnimate className="md:w-[70%] mx-auto pl-10 " direction="x">
          <h2>
            <span className="text-white text-lg md:text-4xl">I&apos;M </span>
            <span className="text-orange-500 text-3xl md:text-5xl ml-2">
              Johnny Li
            </span>
          </h2>


          <TypeWriter
            strings={["Full Stack Developer", "Anime Lover", "A Gym-Goer"]}
            auto={true}
            loop={true}
          />

        </RevealAnimate>
      </div>

      <div className="md:w-[50%] flex justify-center items-center mb-5 ">
        <Image
          src="/developer.jpg"
          alt="image"
          width={300}
          height={300}
          className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] "
        />
      </div>

      <div className="absolute bottom-5 left-6 text-white">
        <FaLinkedinIn className="text-3xl my-3 hover:text-orange-500" />

        <Link href="https://github.com/GummyJohn" target="_blank">
          <FaGithub className="text-3xl my-3 hover:text-orange-500" />
        </Link>
      </div>

      <div className="absolute bottom-[100px] md:bottom-[140px] -right-20 text-white rotate-90 flex items-center">
        <h2 className="tracking-widest md:text-xl">lijohnny21@gmail.com</h2>
      </div>
    </div>
  );
};

export default ShowCase;

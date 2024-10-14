import { RefObject } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Link from "next/link";
import RevealAnimate from "../RevealAnimate";

type Props = {
  sectionRef: RefObject<HTMLDivElement>;
};

const ContactSection = ({ sectionRef }: Props) => {
  return (
    <div ref={sectionRef} className="mt-20">
      <RevealAnimate 
        initialPlace={100}
        direction="y"
        className="text-white tracking-widest text-5xl text-center font-bold border-b-2 border-orange-500 leading-[.1rem]"
      >
        <span
          style={{ backgroundColor: "#3b3b3b" }}
          className="bg-white py-2 px-4"
        >
          Contact Me
        </span>
      </RevealAnimate>

      <RevealAnimate 
        direction="y" 
        initialPlace={100}
        className="flex flex-col items-center justify-evenly py-16 " 
      >
        <div className="flex flex-col lg:flex-row items-center justify-evenly px-5">
          <div className="flex items-center justify-between bg-stone-500 py-2 px-4 rounded-2xl w-full">
            <IoMdMail className="text-3xl text-orange-500" />
            <div className="text-center w-full">
              <h2 className="text-white text-xl">lijohnny21@gmail.com</h2>
            </div>
          </div>

          <div className="flex items-center justify-between bg-stone-500 py-2 px-4 rounded-2xl mx-5 w-full my-5 lg:my-0">
            <FaPhoneAlt className="text-3xl text-orange-500" />
            <div className="text-center w-full">
              <h2 className="text-white text-xl">(347) 681-2466</h2>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between bg-stone-500 py-2 px-4 rounded-2xl w-full">
            <FaLocationDot className="text-3xl text-orange-500" />
            <div className="text-center w-full">
              <h2 className="text-white text-xl text-center">
                New York, New York
              </h2>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between bg-stone-500 py-2 px-4 rounded-2xl mt-10 w-[80%] lg:w-[270px]">
          <FaLocationDot className="text-3xl text-orange-500" />
          <div className="text-center">
            <h2 className="text-white text-xl text-center">
              New York, New York
            </h2>
          </div>
        </div>
      </RevealAnimate>

      <RevealAnimate 
        initialPlace={100}
        direction="y"
        className="border-b-2 border-orange-500 relative flex items-center justify-center"
      >
        <div
          style={{ backgroundColor: "#3b3b3b" }}
          className="bg-white py-2 px-4 absolute flex items-center -top-5"
        >
          <Link href="https://github.com/j0hnnyli" target="_blank">
            <FaGithub className="text-3xl text-orange-500 mx-2 hover:text-white" />
          </Link>

          <Link href="https://www.linkedin.com/in/johnny-li-3a0482331">
            <FaLinkedinIn className="text-3xl text-orange-500 mx-2 hover:text-white" />
          </Link>
        </div>
      </RevealAnimate>

      <RevealAnimate 
        initialPlace={100} 
        direction="y" 
        className="h-[30vh] flex items-center justify-center px-2"
      >
        <div className="flex">
          <RiDoubleQuotesL className="text-3xl text-orange-500" />

          <h2 className="text-2xl lg:text-4xl font-bold tracking-widest text-white text-center">
            Thank you for exploring my portfolio
          </h2>

          <RiDoubleQuotesR className="text-3xl text-orange-500 " />
        </div>
      </RevealAnimate>
    </div>
  );
};

export default ContactSection;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  title: string;
  tags: string[];
  img: string;
  link: string;
  gitLink: string;
  description: string;
};

const ProjectCard = ({
  title,
  tags,
  link,
  gitLink,
  img,
  description,
}: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative h-[300px] w-full rounded-2xl overflow-hidden"
    >
      <Image
        src={img}
        alt={title}
        width={300}
        height={300}
        className={`w-full h-full object-cover rounded-2xl ${
          isHover && "scale-125 ease-in-out duration-200"
        } `}
      />

      <button
        onClick={() => setIsHover(!isHover)}
        className="lg:hidden absolute top-5 right-5 text-orange-500 font-bold"
      >
        show
      </button>

      {isHover && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white p-4 rounded-2xl">
          <h2 className="text-2xl tracking-widest font-bold text-orange-500">
            {title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-2 md:w-[90%] mx-auto">
            {tags.map((tag, index) => (
              <p key={index} className="py-1 px-3 rounded-xl bg-gray-500">
                {tag}
              </p>
            ))}
          </div>

          <p className=" my-5 lg:my-10 text-sm lg:text-xl text-center">
            {description}
          </p>

          <div className="flex">
            <Link
              href={link}
              target="_blank"
              className="py-2 px-4 bg-purple-500 text-white hover:bg-purple-700 cursor-pointer mx-2 rounded-xl"
            >
              View
            </Link>

            <Link
              href={gitLink}
              target="_blank"
              className="py-2 px-4 bg-black text-white hover:bg-slate-900 cursor-pointer mx-2 rounded-xl"
            >
              GitHub
            </Link>
          </div>

          <button
            onClick={() => setIsHover(false)}
            className="text-orange-500 absolute top-5 right-5 lg:hidden"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

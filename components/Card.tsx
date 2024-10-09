"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateVisible from "./AnimateVisible";
import { Projects } from "@/lib/types/projectType";


const Card = ({ title, tags, link, gitLink, img, type }: Projects) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <AnimateVisible>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative w-full overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={300}
          className={`w-full h-full object-cover`}
        />

        <button
          onClick={() => setIsHover(!isHover)}
          className="lg:hidden absolute top-5 right-5 text-orange-500 font-bold"
        >
          show
        </button>

        {isHover && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white p-4 overflow-auto pt-10">
            <h2 className="text-xl tracking-widest font-bold text-orange-500 text-center">
              {title}
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-2 my-2">
              {tags.map((tag, index) => (
                <p key={index} className="py-1 px-2 rounded-xl bg-gray-500 text-sm">
                  {tag}
                </p>
              ))}
            </div>

            <div className="flex">
              <Link
                href={link}
                target="_blank"
                className="py-2 px-4 bg-purple-500 text-white hover:bg-purple-700 cursor-pointer mx-2 rounded-xl"
              >
                {type === 'website' ? 'View' : 'Play'}
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
    </AnimateVisible>
  );
};

export default Card;

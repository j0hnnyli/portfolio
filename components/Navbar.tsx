import Link from "next/link";
import { RefObject } from "react";

type Props = {
  fn: (ref: RefObject<HTMLDivElement>) => void;
  home: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
  project: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
};

const Navbar = ({ fn, home, about, project, contact }: Props) => {
  return (
      <nav
        className="bg-primary_gray border-white md:flex items-center justify-center fixed top-0 w-full z-50 h-16 hidden"
      >
        <div className="flex items-center justify-between max-w-[1300px] mx-auto px-5 bg-primary_gray w-full">
          <h2 className="text-orange-500 text-3xl">JL</h2>

          <div className="text-white text-xl">
            <button
              onClick={() => fn(home)}
              className="mx-2 hover:border-b hover:border-orange-500"
            >
              Home
            </button>
            <button
              onClick={() => fn(about)}
              className="mx-2 hover:border-b hover:border-orange-500"
            >
              About
            </button>
            <button
              onClick={() => fn(project)}
              className="mx-2 hover:border-b hover:border-orange-500"
            >
              Projects
            </button>
            <button
              onClick={() => fn(contact)}
              className="mx-2 hover:border-b hover:border-orange-500"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

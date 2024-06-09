import { RefObject } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenuOutline } from "react-icons/io5";
import { FaHome, FaProjectDiagram, FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

type Props = {
  fn: (ref: RefObject<HTMLDivElement>) => void;
  home: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
  project: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
};

const MediaNav = ({ fn, home, about, project, contact }: Props) => {
  return (
    <div
      style={{ backgroundColor: "#3b3b3b" }}
      className="md:hidden  w-full fixed top-0 flex justify-start items-center z-50"
    >
      <Sheet>
        <SheetTrigger className="text-orange-500 p-2">
          <IoMenuOutline className="text-4xl" />
        </SheetTrigger>

        <SheetContent
          style={{ backgroundColor: "#3b3b3b" }}
          side="left"
          className="text-white"
        >
          <h2 className="text-5xl text-orange-500 font-bold text-center">JL</h2>

          <div className="flex justify-center items-center my-10">
            <div className="flex flex-col">
              <SheetClose className="my-3">
                <div onClick={() => fn(home)} className="flex items-center">
                  <FaHome className="text-2xl text-orange-500" />
                  <h2 className="text-2xl ml-3">Home</h2>
                </div>
              </SheetClose>

              <SheetClose className="my-3">
                <div onClick={() => fn(about)} className="flex items-center">
                  <FaInfoCircle className="text-2xl text-orange-500" />
                  <h2 className="text-2xl ml-3">About</h2>
                </div>
              </SheetClose>

              <SheetClose className="my-3">
                <div onClick={() => fn(project)} className="flex items-center">
                  <FaProjectDiagram className="text-2xl text-orange-500" />
                  <h2 className="text-2xl ml-3">Projects</h2>
                </div>
              </SheetClose>

              <SheetClose className="my-3">
                <div onClick={() => fn(contact)} className="flex items-center">
                  <IoIosContact className="text-2xl text-orange-500" />
                  <h2 className="text-2xl ml-3">Contact</h2>
                </div>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MediaNav;

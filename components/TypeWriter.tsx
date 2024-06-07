"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {
  strings: string[];
  auto: boolean;
  loop: boolean;
};

const TypeWriter = ({ strings, auto, loop }: Props) => {
  return (
    <div className="text-white text-2xl md:text-3xl mt-3">
      <Typewriter
        options={{
          strings: strings,
          autoStart: auto,
          loop: loop,
        }}
      />
    </div>
  );
};

export default TypeWriter;

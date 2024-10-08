import React from "react";
import Card from "@/components/Card";

const GamesTab = () => {
  return (
    <>
      <h2 className="text-red-500 text-center font-bold text-lg"> Only playable on Laptop/Desktop for Now</h2>
      <div className="my-10  grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
        <Card
          title="Ball Havoc"
          link="https://j0hnnyli.github.io/ball-havoc/"
          gitLink="https://github.com/j0hnnyli/ball-havoc?tab=readme-ov-file"
          img="/ballhavoc.png"
          tags={["HTML", "CSS", "Canvas", "Javascript"]}
          type='game'
        />
      </div>
    </>
  );
};

export default GamesTab;

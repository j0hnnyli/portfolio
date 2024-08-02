import React from "react";
import Card from "@/components/Card";

const GamesTab = () => {
  return (
    <div className="my-10  grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
      <Card
        title="Ball Havoc"
        link="https://j0hnnyli.github.io/ball-havoc/"
        gitLink="https://github.com/j0hnnyli/ball-havoc?tab=readme-ov-file"
        img="/ballhavoc.png"
        description="Interactive challenge where players tries to stay alive"
        tags={["HTML", "CSS", "Canvas", "Javascript"]}
      />
    </div>
  );
};

export default GamesTab;

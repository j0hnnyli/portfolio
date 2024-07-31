import React from "react";
import Card from "@/components/Card";

const GamesTab = () => {
  return (
    <div className="my-10  grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
      <Card
        title="Ball Havoc"
        link="https://gummyjohn.github.io/ball-havoc/"
        gitLink="https://github.com/GummyJohn/ball-havoc"
        img="/ballhavoc.png"
        description="Interactive challenge where players tries to stay alive"
        tags={["HTML", "CSS", "Canvas", "Javascript"]}
      />
    </div>
  );
};

export default GamesTab;

import React from "react";
import Card from "@/components/Card";

const WebsitesTab = () => {
  return (
    <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
      <Card
        title="SwiftShop"
        link="https://swiftshop-alpha.vercel.app/"
        gitLink="https://github.com/j0hnnyli/swiftshop"
        img="/swiftshop.jpg"
        description="Ecomm webiste with full cart functionality"
        tags={["NextJS", "Supabase", "Tailwind", "Responsive", "Typescript"]}
        type="website"
      />

      <Card
        title="RecipeHub"
        link="https://recipehub-swart.vercel.app/"
        gitLink="https://github.com/j0hnnyli/recipe_nextjs"
        img="/recipehub.jpg"
        description="Recipe Hub where user can explore new recipe and customize their personal recipe list"
        tags={["API", "NextJS", "Tailwind", "Responsive", "Typescript"]}
        type="website"
      />

      <Card
        title="Inventory Management"
        link="https://inventorycrud.vercel.app/"
        gitLink="https://github.com/j0hnnyli/inventory-server"
        img="/inventoryCRUD.png"
        description="Self Made Inventory Management API enabling users to create, update, delete, and restore products"
        tags={[
          "NodeJS",
          "NextJS",
          "Tailwind",
          "Responsive",
          "Express",
          "MongoDB",
          "Typescript",
        ]}
        type="website"
      />

      <Card
        title="Anime Horizon"
        link="https://anime-horizon.vercel.app/"
        gitLink="https://github.com/j0hnnyli/anime-horizon"
        img="/animehorizon.png"
        description="Anime watch list app enabling users to manage their favorite anime and explore manga titles"
        tags={["React", "Tailwind", "Responsive", "API", "Javascript"]}
        type="website"
      />
    </div>
  );
};

export default WebsitesTab;

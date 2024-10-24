import { Projects } from "../types/projectType"

const projects : Array<Projects> = [
  {
    title: "SwiftShop",
    link: "https://swiftshop-alpha.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/swiftshop",
    img: "/swiftshop.jpg",
    tags: ["NextJS", "Supabase", "Tailwind", "Responsive", "Typescript"],
    type: 'website'
  },
  {
    title: "RecipeHub",
    link: "https://recipehub-swart.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/recipe_nextjs",
    img: "/recipehub.jpg",
    tags: ["API", "NextJS", "Tailwind", "Responsive", "Typescript"],
    type: "website"
  },
  {
    title: "Inventory Management",
    link: "https://inventorycrud.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/inventory-server",
    img: "/inventoryCRUD.png",
    tags: ["NodeJS", "NextJS", "Tailwind", "Responsive", "Express", "MongoDB", "Typescript"],
    type: "website"
  },
  {
    title: "Anime Horizon",
    link: "https://animehorizon.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/AnimeHorizon",
    img: "/animehorizon.png",
    tags: ["NextJS", "Tailwind", "Responsive", "API", "Typescript"],
    type: "website"
  },
  {
    title: "Ball Havoc",
    link: "https://j0hnnyli.github.io/ball-havoc/",
    gitLink: "https://github.com/j0hnnyli/ball-havoc?tab=readme-ov-file",
    img: "/ballhavoc.png",
    tags: ["HTML", "CSS", "Canvas", "Javascript"],
    type:"game",
  }
]

export default projects;
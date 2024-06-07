import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMongodb } from "react-icons/si";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
} from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import SkillIcon from "../SkillIcon";



const SkillSection = () => {
  return (
    <div 
      className="mt-16 w-[90%] md:w-[80%] max-w-[1300px] mx-auto px-5"
    >
      <h2 className="text-5xl text-center tracking-widest text-white">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 my-5">
        <SkillIcon
          title="HTML"
          icon={<FaHtml5 className="text-5xl text-orange-600" />}
        />
        <SkillIcon
          title="CSS"
          icon={<FaCss3 className="text-5xl text-blue-500" />}
        />
        <SkillIcon
          title="Javascript"
          icon={<IoLogoJavascript className="text-5xl text-yellow-400" />}
        />
        <SkillIcon
          title="Typescript"
          icon={<SiTypescript className="text-5xl text-blue-500" />}
        />
        <SkillIcon
          title="NodeJS"
          icon={<FaNodeJs className="text-5xl text-green-600" />}
        />
        <SkillIcon
          title="React"
          icon={<FaReact className="text-5xl text-blue-500" />}
        />
        <SkillIcon
          title="NextJS"
          icon={<RiNextjsFill className="text-5xl text-slate-800" />}
        />
        <SkillIcon
          title="Tailwind"
          icon={<RiTailwindCssFill className="text-5xl text-blue-400" />}
        />
        <SkillIcon
          title="GitHub"
          icon={<FaGithub className="text-5xl text-slate-900" />}
        />
        <SkillIcon
          title="Supabase"
          icon={<RiSupabaseFill className="text-5xl text-green-400" />}
        />
        <SkillIcon
          title="MongoDB"
          icon={<SiMongodb className="text-5xl text-green-700" />}
        />
        <SkillIcon
          title="PostgreSQL"
          icon={<BiLogoPostgresql className="text-5xl text-blue-600" />}
        />
      </div>
    </div>
  );
};

export default SkillSection;

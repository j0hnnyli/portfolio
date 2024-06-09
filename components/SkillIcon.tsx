import { ReactNode } from "react";
import RevealAnimate from "./RevealAnimate";

type Props = {
  icon: ReactNode;
  title: string;
};

const SkillIcon = ({ icon, title }: Props) => {
  return (
    <RevealAnimate
      className="flex flex-col justify-between items-center bg-gray-600  p-2 rounded-xl"
      direction="x"
    >
      <div>
        <div />

        {icon}

        <p className="text-white text-2xl">{title}</p>
      </div>
    </RevealAnimate>
  );
};

export default SkillIcon;

import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
};

const SkillIcon = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-600  p-2 rounded-xl">
      <div />

      {icon}

      <p className="text-white text-2xl">{title}</p>
    </div>
  );
};

export default SkillIcon;

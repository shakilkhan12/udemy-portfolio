import classNames from "classnames";
import Image from "next/image";
const SkillComponent = ({ skill }) => {
  return (
    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
      <div
        className={classNames("relative w-[25px] h-[25px]", {
          "bg-white rounded-full": skill.name === "next",
        })}
      >
        <Image src={skill.image} fill className="w-full h-full object-cover" />
      </div>
      <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
        {skill.name}
      </span>
    </div>
  );
};
export default SkillComponent;

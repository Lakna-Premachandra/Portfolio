import React from "react";
import { FaHtml5 , FaCss3Alt , FaBootstrap , FaSass , FaPhp , FaGithub  } from "react-icons/fa";
import { IoLogoJavascript , IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress , SiMysql , SiMongodb , SiDotnet } from "react-icons/si";

export default function Skills() {
  const data = [
    {
      title: "HTML",
      icon: <FaHtml5 size={90} />,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt size={90} />,
    },
    {
      title: "JavaScript",
      icon: <IoLogoJavascript size={90} />,
    },
    {
      title: "React JS",
      icon: <IoLogoReact size={90} />,
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill size={90} />,
    },
    {
      title: "Bootstrap ",
      icon: <FaBootstrap size={90} />,
    },
    {
      title: "Sass ",
      icon: <FaSass size={90} />,
    },
    {
      title: "Php ",
      icon: <FaPhp size={90} />,
    },
    {
      title: "Express JS ",
      icon: <SiExpress size={90} />,
    },
    {
      title: ".NET ",
      icon: <SiDotnet size={90} />,
    },
    {
      title: "Mysql ",
      icon: <SiMysql size={90} />,
    },
    {
      title: "Mongodb ",
      icon: <SiMongodb size={90} />,
    },
    {
      title: "Github ",
      icon: <FaGithub size={90} />,
    },
  ];
  return (
    <>
      <div id="skills" className="skills__wrapper max-w-[1500px]  m-auto p-4 border-2 border-red-500">
        <h1 className="text-left text-2xl font-bold ">My Skills</h1>
        <p className="py-3">These are the technologies I've worked with</p>
  <div className="skilla__container grid grid-cols-7   place-content-center h-auto border  gap-4 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
    {data.map((item, index) => (
      <div key={index} className="max-w-[200px] bg-[#324569] rounded-md ">
        <div className=" rounded-t flex justify-center items-center p-4 text-[#324569] bg-slate-100  ">{item.icon}</div>
        <h4 className="text-center text-lg font-bold p-2 text-white">{item.title}</h4>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

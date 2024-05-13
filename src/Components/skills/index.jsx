import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiMongodb, SiDotnet } from "react-icons/si";

export default function Skills() {

  const details = [
    {
      id: 1,
      title: "Frontend",
      icons: [<FaHtml5 />, <FaCss3Alt/>, <IoLogoJavascript />,<IoLogoReact/>, <RiTailwindCssFill />,<FaBootstrap />, <FaSass />]
    },
    {
      id: 1,
      title: "Backend",
      icons: [<FaJava />, <SiExpress />, <SiDotnet />, <FaPhp />],
    },
    {
      id: 1,
      title: "Database",
      icons: [<SiMysql />, <SiMongodb />]
    },
    {
      id: 1,
      title: "Techstack",
      icons: [<FaGithub />]
    },
  ];

  return (
    <>
      <div
        id="skills"
        className="skills__wrapper max-w-5xl  m-auto p-4  py-6 "
      >
        <h1 className="text-left text-2xl font-bold  ">My Skills</h1>
        <p className="pt-3 pb-5">These are the technologies I've worked with</p>

        <div className="skills__container">
          {details.map((item) => {
            return (
              <>
                <div className="mb-6 " >
                  <div className="title border border-[#2A78CB] shadow-md bg-slate-200 rounded-md p-4 text-center flex max-sm:flex-col gap-4">
                    <h1 className=" py-3 text-md font-bold tracking-wider">{item.title}</h1>
                    <p className=" text-4xl flex  gap-3 flex-wrap text-[#2A78CB]">{item.icons} </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

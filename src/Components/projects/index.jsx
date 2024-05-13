import React from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiMongodb, SiDotnet } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import railway from "/images/railway.png";
import exploreSL from "/images/exploreSL.png";
import forYouImage from "/images/foryou.png";
import petShopImage from "/images/petshop1.png";
// import petShopImage2 from "/images/petshop2.png";
import restaurantImage from "/images/restaurant.png";
import appleiStore from "/images/appleiStore.png"

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Train seats booking website",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: railway
    },
    {
      id: 2,
      title: "Explore Sri Lanka Website",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: exploreSL
    },
    {
      id: 3,
      title: "Pet Care Shop App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: petShopImage
    },
    {
      id: 4,
      title: "The Outer Clove Website",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: restaurantImage
    },
    {
      id: 5,
      title: "Apple iStore",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: appleiStore
    },
    {
      id: 6,
      title: "4u-Shop-Website",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda maxime vel rerum quasi. Vero incidunt natus aspernatur, nemo magni eos dignissimos! Quos aperiam suscipit explicabo molestiae perferendis omnis expedita!",
      icons: [<IoLogoReact />, <SiDotnet />, <RiTailwindCssFill />],
      src: forYouImage
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="max-w-5xl m-auto p-4 py-6 "
      >
        <h1 className="text-left text-2xl font-bold py-4"> Projects</h1>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-xs:grid-cols-1">
          {data.map((item) => {
            return (
              <div className="border border-blue-600 rounded-md shadow-md">
                <div className="w-full   h-40 flex m-auto">
                  <img
                    className="w-full rounded-t-md"
                    src={item.src}
                    alt=""
                  />
                </div>

                <div
                  key={item.id}
                  className="flex justify-center items-center flex-col gap-4 "
                >
                  <h3 className="font-semibold text-xl pt-4">{item.title}</h3>
                  <p className="text-sm leading-7 px-3">{item.description}</p>
                 
                </div>

                <div className="p-4">
                  <button className="flex justify-start gap-3 pb-3  text-3xl text-blue-600">
                    {item.icons}
                  </button>
                  <Link className="flex gap-1" to="">
                    Open in Github <FiArrowUpRight className="size-5" />
                  </Link>
                  </div>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

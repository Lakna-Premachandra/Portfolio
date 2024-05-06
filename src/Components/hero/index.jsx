import React from "react";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedinIn , FaGithub , FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <section
        id="heroSection"
      >
        <div className="grid grid-cols-3 gap-10 max-w-[1500px]  m-auto p-4 border-2 border-red-500 ">
          <div className="col-span-2">
            <p className="text-md mb-5 flex gap-2">
              Hello, <MdWavingHand className="fill-yellow-500 size-5" /> I'm
              Lakna Premachandra
            </p>
            <h1 className="font-bold text-3xl mb-5">
              <span>Web</span>
              <br />
              Developer
            </h1>
            <p className="text-sm leading-7  mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum 
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt fugiat 
            </p>
            <div className=" py-4">
              <ul className="flex">
                   <li className=" border-2 border-blue-950 rounded-full mr-2"> <Link target='_blank' to='https://www.linkedin.com/in/lakna-premachandra-6b8078286/'><FaLinkedinIn className="size-7 p-1 fill-blue-950" /></Link>  </li>
                   <li className="border-2 border-blue-950 rounded-full mr-2"> <Link target='_blank' to='https://github.com/Lakna-Premachandra'><FaGithub className="size-7 p-1 fill-blue-950" /> </Link>  </li>
                   <li className="border-2 border-blue-950 rounded-full mr-2"> <Link target='_blank' to='https://www.facebook.com/profile.php?id=100092575895620'><FaFacebookF className="size-7 p-1 fill-blue-950" /> </Link>  </li>
                   <li className="border-2 border-blue-950 rounded-full mr-2"> <Link target='_blank' to='https://www.instagram.com/lakna_premachandra/'><AiFillInstagram className="size-7 p-1 fill-blue-950" /> </Link>  </li>
              </ul>
              
            </div>
            <button className="bg-[#0a2351] text-white font-bold p-2 rounded-md">
              Download My CV
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="max-w-[300px] w-full rounded-md shadow-lg "
              src="./images/img1.jpg"
              alt="hero section image"
            />
          </div>
        </div>
      </section>
    </>
  );
}


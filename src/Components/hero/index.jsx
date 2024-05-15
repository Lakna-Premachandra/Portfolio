import React from "react";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import myImage from '/images/img2.png';

export default function HeroSection() {
  return (
    <>
      <section id="heroSection">
        <div className="grid grid-cols-3 gap-10 max-w-5xl  m-auto p-4 pt-28 max-sm:grid-cols-1">
          <div className="col-span-2 max-sm:col-span-1">
            <p className="text-xl mb-3 flex gap-2">
              Hello, <MdWavingHand className="fill-yellow-500 size-5" />
            </p>
            <div className="tracking-wider">
              <h1 className="text-xl mb-10">I'm Lakna Premachandra</h1>
              <h1 className="font-bold text-4xl mb-5 ">
                <span className="text-[#2A78CB] ">Web</span>
                <br />
                Developer
              </h1>
            </div>

            <p className="text-md leading-9  mb-4">
              As an undergraduate software engineering student at ICBT Colombo
              Campus, pursuing a degree from Cardiff Metropolitan University,
              UK,
              <br />I am deeply passionate about web development and eager to
              leverage my skills to tackle real-world challenges. I'm on the
              lookout for opportunities to learn and grow further in this field.
            </p>
            <div className=" py-7">
              <ul className="flex">
                <li className=" border-2 border-[#2A78CB] rounded-full mr-2">
                  {" "}
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/lakna-premachandra-6b8078286/"
                  >
                    <FaLinkedinIn className="size-7 p-1 fill-[#2A78CB]" />
                  </Link>{" "}
                </li>
                <li className="border-2 border-[#2A78CB] rounded-full mr-2">
                  {" "}
                  <Link
                    target="_blank"
                    to="https://github.com/Lakna-Premachandra"
                  >
                    <FaGithub className="size-7 p-1 fill-[#2A78CB]" />{" "}
                  </Link>{" "}
                </li>
                <li className="border-2 border-[#2A78CB] rounded-full mr-2">
                  {" "}
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=100092575895620"
                  >
                    <FaFacebookF className="size-7 p-1 fill-[#2A78CB]" />{" "}
                  </Link>{" "}
                </li>
                <li className="border-2 border-[#2A78CB] rounded-full mr-2">
                  {" "}
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/lakna_premachandra/"
                  >
                    <AiFillInstagram className="size-7 p-1 fill-[#2A78CB]" />{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <button className="bg-[#2A78CB] text-white font-bold p-2 rounded-md tracking-wider">
              <a href="public/images/Lakna.pdf" download="LaknaResume.pdf">
              Download My CV
            </a>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="     "
              src={myImage}
              alt="hero section image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

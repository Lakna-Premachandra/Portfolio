import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function About() {
  return (
    <>
      <div id="about" className="max-w-5xl m-auto p-4 py-6 ">
        
        <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1" >
          <div className="col-span-2 flex justify-center items-start flex-col max-sm:col-span-1">
          <h1 className="text-left text-2xl font-bold ">About Me</h1>
          <p className="col-span-2 flex justify-center items-center pt-5 pb-4 text-md leading-9  mb-4">I am a person who is energetic, self-motivated, trustworthy, responsible, and hardworking. As a team player, I adapt well to any situation and can operate effectively in a team setting as well as on my own initiative. I can operate effectively under duress and meet tight deadlines. !</p>
          <button className=" bg-[#2A78CB] text-white font-bold p-2 rounded-md tracking-wider" > <AnchorLink href='#contact'> Contact Me</AnchorLink></button>
          </div>
          
          <div className="flex justify-center items-center">
          <img className="max-w-[300px] w-full rounded-md shadow-lg flex justify-center items-c" src="public/images/img1.jpg" alt="about image" />
          </div>
        </div>
      </div>
    </>
  );
}

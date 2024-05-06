import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="max-w-[1500px] m-auto p-4  border-2 border-red-500">
        
        <div className="grid grid-cols-3 w-full gap-8 " >
          <div className="col-span-2 flex justify-center items-start flex-col">
          <h1 className="text-left text-2xl font-bold ">About Me</h1>
          <p className="col-span-2 text-sm leading-7 flex justify-center items-center pt-5 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora, dolore debitis, voluptates vitae error alias eaque nostrum totam iste natus, perspiciatis similique porro recusandae a quidem. Commodi, debitis repudiandae!</p>
          <button className="bg-[#0a2351] text-white font-bold p-2 rounded-md">Hire me</button>
          </div>
          
          <div className="flex justify-center items-center">
          <img className="max-w-[300px] w-full rounded-md shadow-lg flex justify-center items-c" src="public/images/img1.jpg" alt="about image" />
          </div>
        </div>
      </div>
    </>
  );
}

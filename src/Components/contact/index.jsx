import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
// import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
    <div id='contact' className="max-w-[1500px] m-auto p-4  border-2 border-red-500">
      <h1 className="text-left text-2xl font-bold ">About Me</h1>
      <div className="contact__container grid grid-cols-2 gap-10" >
        <div>
<h1 className='text-xl pt-10 font-medium'>Let's talk</h1>
<p className='py-4 text-sm leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

<div className='flex justify-start items-center gap-2 mb-3'>
  <BiLogoGmail />
  <p>nilanilakna@gmail.com</p>
</div>
<div className='flex justify-start items-center gap-2 mb-3'>
  <FaWhatsapp/>
  <p>+94 70 3181 557</p>
</div>
<div className='flex justify-start items-center gap-2 mb-3'>
  <FaLocationDot/>
  <p>76/1A, Sri Dharmarama Road, Rathmalana, Sri Lanka</p>
</div>

        </div>
        <div className='flex flex-col justify-center items-center gap-5 p-4'>
          <form action=""></form>
          <input className='border p-3 rounded-full focus:outline-none w-80' type="text" placeholder='Your Name' />
          <input className='border p-3 rounded-full focus:outline-none w-80' type="text" placeholder='Your Email' />
          <textarea className='border p-3 rounded-3xl focus:outline-none w-80'  name="message" id="message" cols="40" rows="6" placeholder='Enter Your Message'></textarea>
          <button type='submit' className="bg-[#0a2351] text-white font-bold p-2 rounded-md">Submit Now</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0qfpncf', 'template_jp6uf2i', form.current, {
        publicKey: '_Dqd6KzKE8TttK88-',
      })
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully!',
          });
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id='contact' className="max-w-5xl m-auto p-4 py-14 ">
        <h1 className="text-left text-2xl font-bold ">Contact Me</h1>
        <div className="contact__container grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <div>
            <h1 className='text-2xl pt-10 font-medium'>Let's talk</h1>
            <p className='pt-8 pb-10 text-md leading-7 tracking-wider'>If you have any inquiries, opportunities, or just want to connect, feel free to reach out. I'm always open to new collaborations and discussions. Looking forward to hearing from you!</p>

            <div className='flex justify-start items-center gap-4 mb-4 text-md '>
              <BiLogoGmail className='fill-[#2A78CB] border-2 border-[#2A78CB] rounded-full text-3xl p-1'/>
              <p className='leading-7 tracking-wider'>nilanilakna@gmail.com</p>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4 text-md'>
              <IoLogoWhatsapp className='fill-[#2A78CB] border-2 border-[#2A78CB] rounded-full text-3xl p-1'/>
              <p className='leading-7 tracking-wider'>+94 70 3181 557</p>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4 text-md'>
              <FaLocationDot className='fill-[#2A78CB] border-2 border-[#2A78CB] rounded-full text-3xl p-1'/>
              <p className='leading-7 tracking-wider'>76/1A, Sri Dharmarama Road, Rathmalana, Sri Lanka</p>
            </div>
          </div>
          <div className='p-4 border-2 border-blue-200 rounded-lg'>
            <form className="flex flex-col justify-center items-center gap-5 " ref={form} onSubmit={sendEmail}>
              <input className='border border-zinc-400 p-3 rounded-full focus:outline-none max-w-80 w-full' type="text" name="from_name" placeholder='Your Name' />
              <input className='border p-3 rounded-full border-zinc-400 focus:outline-none max-w-80 w-full' type="text" name="to_name" placeholder='Your Email' />
              <textarea className='border p-3 rounded-3xl border-zinc-400 focus:outline-none max-w-80 w-full' name="message" id="message" cols="40" rows="6" placeholder='Enter Your Message'></textarea>
              <input type="submit" value="Submit Now" className="bg-[#2A78CB] text-white font-bold p-2 rounded-md  cursor-pointer tracking-wider"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import { FaLinkedinIn , FaGithub , FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
    <div id='footer' className="header__wrapper w-full bg-slate-800">
    <div className="header__container  max-w-[1500px]  m-auto  text-white flex items-center justify-between flex-wrap p-12 border-b-2 border-white max-sm:flex-col">
          <div className="logo text-xl tracking-wide py-2">Lakna Premachandra</div>
          <ul className="flex justify-center items-center text-xl gap-6 py-2 max-sm:flex-col">
          
          <li> <AnchorLink href='#heroSection'> <p className="text-base hover:text-yellow-400 tracking-wide " onClick={()=>setShowMenu("heroSection")}>Home</p></AnchorLink></li>

          <li> <AnchorLink href='#about'><p className="text-base hover:text-yellow-400 tracking-wide" onClick={()=>setShowMenu("about")}>About</p></AnchorLink></li>

          <li> <AnchorLink href='#skills'><p className="text-base hover:text-yellow-400 tracking-wide" onClick={()=>setShowMenu("skills")}>Skills</p></AnchorLink></li>

          <li> <AnchorLink href='#contact'><p className="text-base hover:text-yellow-400 tracking-wide" onClick={()=>setShowMenu("contsct")}>Contact</p></AnchorLink></li>

          <li> <AnchorLink href='#projects'><p className="text-base hover:text-yellow-400 tracking-wide" onClick={()=>setShowMenu("projects")}>Projects</p></AnchorLink></li>

        </ul>

        <ul className="flex gap-4 py-2">
                   <li className=" border-2 border-white rounded-full mr-2"> <Link target='_blank' to='https://www.linkedin.com/in/lakna-premachandra-6b8078286/'><FaLinkedinIn className="size-7 p-1 fill-blue-white" /></Link>  </li>
                   <li className="border-2 border-white rounded-full mr-2"> <Link target='_blank' to='https://github.com/Lakna-Premachandra'><FaGithub className="size-7 p-1 fill-blue-white" /> </Link>  </li>
                   <li className="border-2 border-white rounded-full mr-2"> <Link target='_blank' to='https://www.facebook.com/profile.php?id=100092575895620'><FaFacebookF className="size-7 p-1 fill-blue-white" /> </Link>  </li>
                   <li className="border-2 border-white rounded-full mr-2"> <Link target='_blank' to='https://www.instagram.com/lakna_premachandra/'><AiFillInstagram className="size-7 p-1 fill-blue-white" /> </Link>  </li>
              </ul>
    </div>
    <div className='flex justify-center items-center text-white p-10 tracking-widest leading-8'>
      <p>Design & Developed by Lakna Premachandra</p>
    </div>
    </div>
      
    </>
  )
}

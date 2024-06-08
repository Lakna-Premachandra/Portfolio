import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2, RxHalf2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import About from "../../about";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMiniXMark } from "react-icons/hi2";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickMenu = () => {
    setShowMenu(!showMenu);
  };

  const links = [
    {
      id:1,
      name:"Home",
      href:"#heroSection"
    },
    // {
    //   id:2,
    //   name:"About",
    //   href:"#about"
    // },
    {
      id:3,
      name:"Skills",
      href:"#skills"
    },
    {
      id:4,
      name:"Projects",
      href:"#projects"
    },
    {
      id:5,
      name:"Contact",
      href:"#contact"
    },
]
  return (
    <>
      <div className="header__wrapper w-full bg-white shadow-md fixed">
        <div className="header__container relative  max-w-5xl  m-auto flex text-white items-center justify-between p-5">
          <div className="logo text-2xl tracking-widest leading-8 text-black font-bold flex max-[420px]:flex-col">Lakna <span className="text-[#2A78CB]">Premachandra</span></div>
          <ul className="flex text-xl gap-3 max-sm:hidden">
          
          {links.map(link=>(
          <div key={link.id}>
            <li> <AnchorLink  href={link.href}> <p className="text-lg text-black tracking-wide font-medium  hover:text-[#38587a] ">{link.name}</p></AnchorLink></li>
          </div>
        ))}
        
          </ul>
          
          <button
            onClick={clickMenu}
            className="md:hidden absolute top-6 right-5 z-50 "
          >
            {showMenu ? (
              <HiMiniXMark className="text-3xl fill-black" />
            ) : (
              <TiThMenu className="text-2xl fill-black" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`list-none w-[300px] h-full right-0 fixed flex flex-col items-center gap-8 py-6 text-center md:hidden transition-all duration-500 bg-[#2A78CB] text-white ${
          showMenu ? "top-[4rem]" : "top-[-2000px]" 
        }`}
      >
        
        <li> <AnchorLink href='#heroSection'> <p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("heroSection")}>Home</p></AnchorLink></li>

        {/* <li> <AnchorLink href='#about'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("about")}>About</p></AnchorLink></li> */}

      <li> <AnchorLink href='#skills'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("skills")}>Skills</p></AnchorLink></li>

      <li> <AnchorLink href='#contact'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("contsct")}>Contact</p></AnchorLink></li>

       <li> <AnchorLink href='#projects'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("projects")}>Projects</p></AnchorLink></li>
      </div>
    </>
  );
};
export default Header;

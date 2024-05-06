import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2, RxHalf2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import About from "../../about";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="header__wrapper w-full bg-slate-800 relative">
        <div className="header__container  max-w-[1500px]  m-auto flex text-white items-center justify-between p-5">
          <div className="logo text-xl">Lakna Premachandra</div>
          <ul className="flex text-xl gap-3 max-sm:hidden">
          
            <li> <AnchorLink href='#heroSection'> <p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("heroSection")}>Home</p></AnchorLink></li>

            <li> <AnchorLink href='#about'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("about")}>About</p></AnchorLink></li>

            <li> <AnchorLink href='#skills'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("skills")}>Skills</p></AnchorLink></li>

            <li> <AnchorLink href='#contact'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("contsct")}>Contact</p></AnchorLink></li>

            <li> <AnchorLink href='#projects'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("projects")}>Projects</p></AnchorLink></li>

          </ul>
          <button
            onClick={clickMenu}
            className="md:hidden absolute top-4 right-5 z-50"
          >
            {showMenu ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <TiThMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`list-none w-full flex flex-col items-center gap-3 py-4 text-center md:hidden absolute transition-all duration-500 bg-slate-800 text-white ${
          showMenu ? "top-[3.28rem]" : "top-[-200px]"
        }`}
      >
        <li> <AnchorLink href='#heroSection'> <p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("heroSection")}>Home</p></AnchorLink></li>

<li> <AnchorLink href='#about'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("about")}>About</p></AnchorLink></li>

<li> <AnchorLink href='#skills'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("skills")}>Skills</p></AnchorLink></li>

<li> <AnchorLink href='#contact'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("contsct")}>Contact</p></AnchorLink></li>

<li> <AnchorLink href='#projects'><p className="text-base hover:text-yellow-400" onClick={()=>setShowMenu("projects")}>Projects</p></AnchorLink></li>
      </div>
    </>
  );
};
export default Header;

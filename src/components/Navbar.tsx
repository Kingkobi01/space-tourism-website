import { useState } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "/assets/shared/icon-close.svg";
import hamburger from "/assets/shared/icon-hamburger.svg";
import logo from "/assets/shared/logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="mt-8 max-w-[100vw] font-condensed overflow-x-hidden">
      <nav className="flex justify-between items-center ml-auto w-[95%] max-w-[1440px]">
        <div className="w-1/3">
          <img src={logo} alt="" />
        </div>
        <ul
          role="list"
          className={
            showMenu
              ? "top-0 right-0 md:static translate-x-0 duration-150 absolute flex md:flex-row flex-col md:justify-center items-start md:items-center gap-4 lg:gap-8 bg-white/[4%] backdrop-blur-lg backdrop-filter pt-[20%] md:pt-0 w-2/3  h-screen md:h-auto text-sm lg:text-sm md:text-xs uppercase tracking-[4.75px]"
              : "top-0 translate-x-full md:translate-x-0 duration-150 right-0 md:static absolute flex md:flex-row flex-col md:justify-center items-start md:items-center gap-4 lg:gap-8 bg-white/[4%] backdrop-blur-lg backdrop-filter pt-[20%] md:pt-0 w-2/3 h-screen md:h-auto text-sm lg:text-sm md:text-xs uppercase tracking-[4.75px]"
          }
        >
          {["home", "destination", "crew", "technology"].map((page, index) => (
            <li key={index} className="ml-12 md:ml-0">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "relative after:bottom-0 after:left-0 after:absolute flex items-center gap-2 after:bg-white py-6 after:w-full after:h-[3px] duration-150"
                    : "relative after:bottom-0 after:left-0 after:absolute flex items-center gap-2 hover:after:bg-white/60 py-6 after:w-full hover:after:scale-100 after:scale-x-0 after:h-[3px] duration-300"
                }
                to={`/${page === "home" ? "" : page}`}
              >
                <span className="font-bold">0{index}</span>
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className="z-20 md:hidden mr-[5vw] cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <img src={!showMenu ? hamburger : closeIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

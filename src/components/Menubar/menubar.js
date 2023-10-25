import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./menubar.css";
import Socialblock from "../Navbar/socialBlock/socialBlock";
const Menubar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    console.log("hello", menuOpened);
    setMenuOpened((prevState) => !prevState);
  };

  return (
    <Menu
      onOpen={toggleMenu}
      isOpen={menuOpened}
      onClose={toggleMenu}
      right
      customBurgerIcon={
        <div className="w-10 h-10">
          <i class="fa fa-code text-[#70ff00] text-xl mt-[-8px] mr-2"></i>
        </div>
      }
    >
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="#about"
        onClick={toggleMenu}
      >
        About
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="#skills"
        onClick={toggleMenu}
      >
        Skills
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="#projects"
        onClick={toggleMenu}
      >
        Projects
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="#education"
        onClick={toggleMenu}
      >
        Education
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="https://www.linkedin.com/in/chandu-dsc-385086236/"
        target="_blank"
        onClick={toggleMenu}
      >
        Linkedin
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="https://github.com/chandu0077"
        target="_blank"
        onClick={toggleMenu}
      >
        Github
      </a>
      <a
        className="menu-item text-white hover:bg-gray-700 hover:text-white p-3 text-sm cursor-pointer"
        href="mailto:chandu.dsc77@gmail.com"
        target="_blank"
        onClick={toggleMenu}
      >
        Contactme
      </a>
    </Menu>
  );
};

export default Menubar;

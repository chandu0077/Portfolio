import { slide as Menu } from "react-burger-menu";
import { Fragment, useEffect, useState } from "react";
import Socialblock from "./socialBlock/socialBlock";
import Menubar from "../Menubar/menubar";
import { IoColorPaletteOutline } from "react-icons/io5";
import { HexColorPicker } from "react-colorful";
import { HuePicker } from "react-color";

const Navbar = ({ colorChange }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#70ff00");
  const [isPickerVisible, setPickerVisible] = useState(false);

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  useEffect(() => {
    colorChange(color);
  }, [color]);

  const globalColorState = (color) => {
    setColor(parseInt(color.oldHue));
  };

  return (
    <div id="outer-container">
      <nav
        class="bg-[#1b1b1b] fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: `oklch(0.23 0.015 ${color})`,
        }}
      >
        <div class="max-w-[1050px] mx-auto sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-between lg:justify-between w-full">
              <div class="flex justify-center">
                <h2
                  class="text-[#70ff00] text-2xl mr-1 font-bold"
                  style={{
                    color: `oklch(0.75 0.14 ${color})`,
                  }}
                >
                  SAI
                </h2>
                <h2 class="text-white text-2xl font-bold"> CHANDU</h2>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <div class="hidden lg:block text-lg">
                <div class="flex gap-2">
                  <a
                    href="#about"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#education"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Education
                  </a>
                </div>
              </div>
              <div class="flex justify-start gap-2 items-center w-[100%]">
                <Socialblock type={"linkedin"} />
                <Socialblock type={"github"} />
                <Socialblock type={"contact"} color={color} />
                <div className="ml-2 flex flex-col items-center relative">
                  <IoColorPaletteOutline
                    size={24}
                    color="white"
                    onClick={togglePicker}
                    cursor={"pointer"}
                  />
                  {isPickerVisible && (
                    <div className="w-[32px] h-[52px] absolute top-12 right-40">
                      <HuePicker color={color} onChange={globalColorState} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="block lg:hidden ">
              <Menubar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

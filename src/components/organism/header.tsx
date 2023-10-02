import React, { useState } from "react";
import Logo from "../atoms/logo";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className={`w-full ${
        show
          ? " h-full transform delay-500 transition-all overflow-visible ease-in-out"
          : "h-auto transform transition-all delay-500 overflow-hidden ease-in-out"
      } flex justify-between items-center px-20 py-6 allMobile:items-start allMobile:fixed allMobile:backdrop-blur-xl allMobile:px-4 allMobile:py-2 `}
    >
      <Logo />
      {/* menu dekstop & tab */}
      <div className=" allMobile:hidden flex items-center gap-20">
        <ul className="flex items-center gap-4 font-semibold">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About</li>
          <li className=" cursor-pointer">Project</li>
          <li className=" cursor-pointer">Contact</li>
        </ul>
        <button className=" btn">Download CV</button>
      </div>
      {/* menu mobile */}
      <div className=" allMobile:block allTab:hidden allDekstop:hidden">
        <button onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose size={32} /> : <BsList size={32} />}
        </button>
        <ul
          className={` grid gap-4 absolute left-0 mt-4 w-full px-5  ${
            show
              ? " h-60 transform delay-300 transition-all overflow-visible "
              : " h-0 transform transition-all delay-300 overflow-hidden"
          }`}
        >
          <li className="text-xl flex items-center cursor-pointer hover:font-semibold transform transition-all delay-150 select-none overflow-hidden ">
            Home
          </li>
          <li className="text-xl flex items-center cursor-pointer hover:font-semibold transform transition-all delay-150 select-none overflow-hidden ">
            About
          </li>
          <li className="text-xl flex items-center cursor-pointer hover:font-semibold transform transition-all delay-150 select-none overflow-hidden ">
            Project
          </li>
          <li className="text-xl flex items-center cursor-pointer hover:font-semibold transform transition-all delay-150 select-none overflow-hidden ">
            Contact
          </li>
          <button className=" btn allMobile:hidden">Download CV</button>
        </ul>
      </div>
    </div>
  );
}

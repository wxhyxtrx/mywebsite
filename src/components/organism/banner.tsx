import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Mypict from "../../assets/profile.jpeg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
export default function Banner() {
  return (
    <div>
      <div className="flex allMobile:flex-col-reverse justify-stretch items-center gap-8">
        <div className="flex flex-1 flex-col gap-6 allMobile:gap-4 select-none">
          <div className="badge bg-primarry px-3 py-4 font-semibold ">
            Wahyu Tricahyo
          </div>
          <h3 className=" text-5xl allMobile:text-[32px] tracking-tight">
            I'm a{" "}
            <span className=" text-primarry font-bold">
              <Typewriter
                words={["Frontend Developer", "Web Developer"]}
                loop
                cursor
              />
            </span>
          </h3>
          <p className=" text-neutral-600">
            I have an interest in the world of Informatics Engineering, I am
            easy to get along with and like new things in the world of
            informatics engineering
          </p>
          <div className=" flex allMobile:grid allMobile:grid-cols-2 items-center gap-4">
            <button className=" rounded px-4 py-2 font-semibold bg-primarry hover:bg-primarry/70 text-neutral-700">
              Hire me
            </button>
            <button className=" bg-neutral-100 px-4 py-2 font-semibold rounded text-neutral-700">
              Download CV
            </button>
          </div>
        </div>
        <div className=" flex-1 flex justify-end">
          <img
            src={Mypict}
            alt="mypict"
            className=" w-96 h-96 allMobile:w-64 allMobile:h-64 object-cover rounded-full"
          />
        </div>
      </div>
      <div className=" flex items-center gap-6 allMobile:mt-10 allMobile:justify-center">
        <button className=" bg-neutral-100 shadow-sm shadow-neutral-500 rounded-full p-2">
          <FaGithub size={24} />
        </button>
        <button className=" bg-neutral-100 shadow-sm shadow-neutral-500 rounded-full p-2">
          <FaLinkedinIn size={24} />
        </button>
        <button className=" bg-neutral-100 shadow-sm shadow-neutral-500 rounded-full p-2">
          <FaInstagram size={24} />
        </button>
        <button className=" bg-neutral-100 shadow-sm shadow-neutral-500 rounded-full p-2">
          <FaWhatsapp size={24} />
        </button>
      </div>
    </div>
  );
}

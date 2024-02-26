import { BiLogoGoLang, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { LiaUserAstronautSolid, LiaUserCogSolid } from "react-icons/lia";
import { PiGraduationCap, PiStudent } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IAbout from "../../assets/about.png";
import Maskot from "../../assets/profile.jpeg";
import BgStar from "../../assets/star.png";
import BgTale from "../../assets/talegrid.png";

export default function Abaout() {
  return (
    <div className=" relative flex items-start min-h-screen bg-gradient-to-b from-primer from-20% to-secondary px-40 allMobile:px-6">
      <div
        className=" space-y-5 select-none w-3/4 p-10 py-0 h-screen z-10"
        style={{ position: "sticky", top: 0 }}
      >
        <img
          src={BgStar}
          alt="star"
          className=" h-80 object-contain absolute top-0 -left-40 opacity-40"
        />

        {/* <div className=" w-24 h-24 rounded-full bg-white absolute top-10 left-0 opacity-20" /> */}
        <img
          alt="profil"
          src={Maskot}
          className="  w-48 h-48 object-cover rounded-full border-[3px] border-[#272829] relative z-10 "
        />
        <div className=" flex items-center gap-4">
          <h3 className=" text-6xl font-extrabold text-[#272829]">
            Wahyu Tricahyo Mulyo
          </h3>
        </div>
        <p className=" text-xl text-[#272829] font-semibold">
          I am a frontend developer with sufficient skills, I have experience in
          the frontend developer field for 2 years by mastering the Javascript
          and Typescript programming languages with using the React JS and Next
          JS frameworks. I have a personality who is humorous, sociable and
          quickly adapts to the environment around me
        </p>
        <div className=" flex items-center gap-6 allMobile:mt-10 allMobile:justify-center">
          <button className=" bg-[#272829] text-white rounded-full p-2">
            <DiJavascript1 size={24} />
          </button>
          <button className=" bg-[#272829] text-white rounded-full p-2">
            <BiLogoReact size={24} />
          </button>
          <button className=" bg-[#272829] text-white rounded-full p-2">
            <BiLogoTailwindCss size={24} />
          </button>
          <button className=" bg-[#272829] text-white rounded-full p-2">
            <BiLogoGoLang size={24} />
          </button>
        </div>
      </div>
      <div className=" w-full relative z-[1] pt-20">
        {/* <h3 className=" text-center mb-10 text-4xl font-extrabold text-black">
          My Journey
        </h3> */}
        <VerticalTimeline lineColor="#272829" animate>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-transparent border-0"
            contentStyle={{
              background: "#272829",
              color: "#fff",
              borderRadius: "5px",
              border: 0,
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #272829" }}
            iconStyle={{
              background: "white",
              color: "#000",
              width: "30px",
              height: "30px",
              margin: "auto",
              marginTop: "15px",
              left: 0,
              right: 0,
            }}
            icon={<PiStudent size={8} />}
            dateClassName=" mx-2 text-black"
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              SMKN 1 Banyuwangi | RPL
            </h4>
            <label className="text-sm">2015 - 2018</label>
            <p>Learning Program Leanguage Php, Javacript</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-transparent border-0"
            contentStyle={{
              background: "#272829",
              color: "#fff",
              borderRadius: "5px",
              border: 0,
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #272829" }}
            iconStyle={{
              background: "white",
              color: "#000",
              width: "30px",
              height: "30px",
              margin: "auto",
              marginTop: "15px",
              left: 0,
              right: 0,
            }}
            icon={<PiGraduationCap size={8} />}
            dateClassName=" mx-2 text-white text-opacity-100"
          >
            <h3 className="vertical-timeline-element-title">Colleger</h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Stikom PGRI Banyuwangi
            </h4>
            <label className="text-sm">2018 - 2022</label>
            <p>
              Learning program leanguage Javascript with React and Next
              Framework, fluter
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-transparent border-0"
            contentStyle={{
              background: "#272829",
              color: "#fff",
              borderRadius: "5px",
              border: 0,
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #272829" }}
            iconStyle={{
              background: "white",
              color: "#000",
              width: "30px",
              height: "30px",
              margin: "auto",
              marginTop: "15px",
              left: 0,
              right: 0,
            }}
            icon={<LiaUserCogSolid size={8} />}
            dateClassName=" mx-2 text-white text-opacity-100"
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Bothcamp Dumbways ID
            </h4>
            <label className="text-sm">2022 - 2023</label>
            <p>
              preparing to become a fullstack developer with React JS and Golang
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-transparent border-0"
            contentStyle={{
              background: "#272829",
              color: "#fff",
              borderRadius: "5px",
              border: 0,
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #272829" }}
            iconStyle={{
              background: "white",
              color: "#000",
              width: "30px",
              height: "30px",
              margin: "auto",
              marginTop: "15px",
              left: 0,
              right: 0,
            }}
            icon={<LiaUserAstronautSolid size={8} />}
            dateClassName=" mx-2 text-white text-opacity-100"
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Qoin Digital Indonesia
            </h4>
            <label className="text-sm">2023 - present</label>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <img
        alt="tale"
        src={BgTale}
        className=" absolute bottom-0 left-0 right-0 w-screen object-contain opacity-25 "
      />
      <div className=" absolute bottom-0 right-0 ">
        <img alt="maskot" src={IAbout} className=" w-96 h-96 object-contain" />
      </div>
    </div>
  );
}

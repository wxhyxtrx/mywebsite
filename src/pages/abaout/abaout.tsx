import React from "react";
export default function Abaout() {
  return (
    <div className=" relative min-h-screen bg-white px-40 py-20 allMobile:px-6">
      <div className=" text-center flex flex-wrap justify-center gap-5 select-none">
        <h3 className=" text-4xl font-bold">Wahyu Tricahyo Mulyo</h3>
        <p className=" px-20 allMobile:p-0 text-lg allMobile:text-base">
          Saya merupakan seorang frontend Developer dengan skill yang cukup,
          saya memiliki pengalaman pada bidang frontend developer selama 2 tahun
          dengan menguasai bahasa pemrograman Javascript dan Typescript dengan
          menggunakan framework React JS dan Next JS. saya mempunyai pribadi
          yang humoris, mudah bergaul dan cepat beradaptasi di lingkungan
          sekitar saya
        </p>
        <div className=" w-full ">My Skill</div>
        <div className="grid allDekstop:grid-flow-col gap-6 font-black allMobile:grid-cols-4 allMobile:items-center">
          <div>Javascript</div>
          <div>Typescript</div>
          <div>React JS</div>
          <div>Next JS</div>
          <div>Tailwind</div>
          <div>Golang</div>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
}

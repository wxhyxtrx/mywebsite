import React from "react";
import Header from "../../components/organism/header";
import Banner from "../../components/organism/banner";

export default function Dashboard() {
  return (
    <div id="Home" className=" relative min-h-screen overflow-hidden pb-10">
      <div className=" absolute bg-primarry w-40 h-40 rounded-full blur-2xl bottom-0 -right-20 opacity-40" />
      <div className=" absolute bg-primarry w-40 h-40 rounded-full blur-3xl bottom-40 -left-32 opacity-30" />
      <div className=" absolute bg-primarry w-96 h-80 rounded-full blur-2xl -top-32 right-1/2 opacity-10" />
      <header className=" relative z-30">
        <Header />
      </header>
      <section className=" allMobile:mt-24 allMobile:px-6 allDekstop:mt-20 allDekstop:px-40 relative z-10">
        <Banner />
      </section>
    </div>
  );
}

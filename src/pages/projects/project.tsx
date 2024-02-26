import React from "react";
import project1 from "../../assets/1.jpg";
import project2 from "../../assets/2.jpg";
import project3 from "../../assets/3.jpg";
import project4 from "../../assets/4.png";
export default function Project() {
  return (
    <div className="px-40 pt-10 pb-32">
      <h3 className=" text-center font-extrabold text-4xl mb-20">My Project</h3>
      <div className="  grid grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LANDTICK
              <div className="badge badge-success text-white">RELEASE</div>
            </h2>
            <p>Digital platform for booking website-based train tickets that helps tourists to get their travel tickets</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline py-1">React JS</div>
              <div className="badge badge-outline py-1">Boostrap</div>
              <div className="badge badge-outline">Golang</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              WAYSBUCKS
              <div className="badge badge-success text-white">RELEASE</div>
            </h2>
            <p>Digital platform for ordering website-based drinks that helps transactions between buyers and sellers</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline py-1">React JS</div>
              <div className="badge badge-outline py-1">Boostrap</div>
              <div className="badge badge-outline">Golang</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              EASY TECH
              <div className="badge badge-success text-white">RELEASE</div>
            </h2>
            <p>Niagahoster hosting website landing page mockup clone</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Vite JS</div>
              <div className="badge badge-outline">Tailwind CSS</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              CINEMAX
              <div className="badge badge-info text-white">IN PROGRESS</div>
            </h2>
            <p>The digital platform for ordering online tickets for local cinemas helps customers choose the cinema location and the film they want to watch</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Vite JS</div>
              <div className="badge badge-outline">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

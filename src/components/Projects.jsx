import React from "react";
import arrayDestruct from "../assets/portfolio/reactParallax.png";
import navbar from "../assets/portfolio/android1.jpg";
import reactParallax from "../assets/portfolio/android2.jpg";
import reactSmooth from "../assets/portfolio/Screenshot (760).png";

const Project=()=>{
    const portfolios = [
        {
          id: 1,
          src: arrayDestruct,
          lin:"https://github.com/dharunsri09/BillingSystem",
          
        },
        {
          id: 2,
          src: reactParallax,
          lin:"https://github.com/dharunsri09/3D-renderer"
        },
        {
          id: 3,
          src: navbar,
          lin:"https://github.com/dharunsri09/MedcheckOnline",
        },
        {
          id: 4,
          src: reactSmooth,
          lin:"https://github.com/dharunsri09/covidvac",
        },
      ];
    
      return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src,lin }) => (
                <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={lin}>
                    <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Project
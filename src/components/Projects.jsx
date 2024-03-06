import React from "react";
import arrayDestruct from "../assets/portfolio/reactParallax.png";
import navbar from "../assets/portfolio/android1.jpg";
import reactParallax from "../assets/portfolio/android2.jpg";
import reactSmooth from "../assets/portfolio/Screenshot (760).png";
import reactSmooth1 from "../assets/portfolio/Screenshot (854).png";
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
          lin:"http://dharun09.pythonanywhere.com/",
        },
         {
          id: 5,
          src: reactSmooth1,
          lin:"https://dharunsri09.netlify.app/",
        },
        { id: 6,
          src: "https://private-user-images.githubusercontent.com/115633964/310269883-cee71cfe-8ac3-49ca-9359-3da58ecc643b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk3MDMyNTUsIm5iZiI6MTcwOTcwMjk1NSwicGF0aCI6Ii8xMTU2MzM5NjQvMzEwMjY5ODgzLWNlZTcxY2ZlLThhYzMtNDljYS05MzU5LTNkYTU4ZWNjNjQzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNlQwNTI5MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NTlkOGFiOTEyZjlhYjE5NjYwODk4Y2FkNDg0ODM4M2MwYzE3MGI5NmFhZTczODAwNDU4ZTQzMDdlY2Q5NmViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.XohtzkwGxwfurQRN660Xl4hr7Mfjmpd6cRcoRe1sryg",
          lin:"https://github.com/dharunsri09/Depression_Detection",
        }
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

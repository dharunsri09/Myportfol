import React from "react";
import Myimg from '../assets/heroImage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";

const Home =()=> {
    return (
        <div name="home" className="h-screen bg-gradient-to-b from-black via-black to-gray-500 text-white ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        I'm a Software Developer.
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have been developing full stack web projects and android application for a past 2 years.
                        Currently, I am working in frame works like ReactJs,TailwindCss and Django for web projects.
                        As for my android apps I'have developed in both kotlin and java in android studio.
                    </p>
                    <div>
                    <Link to="projects" smooth duration={500}>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight size={25}  className="ml-1 "></MdKeyboardArrowRight>
                            </span>
                        </button>
                    </Link>
                    </div>
                </div>
                <div>
                    <img src={Myimg} alt="myprofile" className="rounded-2xl mx-auto w-2/3 md:w-full h-50"></img>
                </div>
            </div>
        </div>
    );
    
}
export default Home
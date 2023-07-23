import React,{useState} from "react";
import {FaBars,FaTimes} from 'react-icons/fa'

const Nav =()=> {

    const [nav,setNav]=useState(false)

    const links=[
        {
            id:1,
            link : 'home'
        },
        {
            id:1,
            link : 'about'
        },
        {
            id:1,
            link : 'projects'
        },
        {
            id:1,
            link : 'skills'
        },
        {
            id:1,
            link : 'contact'
        },

    ]
    return (   <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
        <div>
            <h1 className="text-5xl ml-2">dharun</h1>
        </div>
    
    <ul className="hidden md:flex">
        {links.map(({id,link})=>(
             <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200">{link}</li>
        ))}
    
    </ul>


    <div 
    onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    > 
        {nav? <FaTimes size={30}/>:<FaBars size={30}/>}
    </div>
    {nav && (  
        <ul className="flex flex-col justify-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({id,link})=>(
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
                ))}
        </ul>

    )}
    </div>
    );
}

export default Nav
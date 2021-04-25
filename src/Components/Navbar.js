import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from 'react-social-icons';

export default function NavBar(){
    return(
        <header id="fixedHead" className='bg-black'>
            <div className="flex justify-between">
                <nav className="py-3 px-1 items-center ml-96 px-9 mt-1">
                    <NavLink to="/" exact 
                    className="inflex-flex items-center py-6 px-6 mr-4  text-white hover:text-green-500 text-2xl tracking-tighter font-robotlik"
                    activeClassName="animate-pulse text-green-500">
                        ~Home
                    </NavLink>
                    <NavLink to="/about"
                    className="inflex-flex items-center py-6 px-6 mr-4  text-white hover:text-green-500 text-2xl tracking-tighter font-robotlik"
                    activeClassName="animate-pulse text-green-500">
                        $About_Me
                    </NavLink>
                    <NavLink to="/projects"
                    className="inflex-flex items-center py-6 px-6 mr-4  text-white hover:text-green-500 text-2xl tracking-tighter font-robotlik"
                    activeClassName="animate-pulse text-green-500">
                        %Projects
                    </NavLink>
                </nav>
                <div className= "py-3 px-1">
                <SocialIcon url="https://linkedin.com/in/c%C3%A9sar-arg%C3%BCello-31670419b" className="mr-4" target="_blank" fgColor="#fff" style={{height:45, width:45}}/>
                <SocialIcon url="https://github.com/carguelloM" className="mr-4" target="_blank" fgColor="#fff" style={{height:45, width:45}}/>
                <SocialIcon url="https://twitter.com/Carguello_M" className="mr-4" target="_blank" fgColor="#fff" style={{height:45, width:45}}/>
                </div>
            </div>
        </header>
    )
}
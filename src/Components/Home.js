import React from "react";
import image from '../nic.JPG'
import me from '../yo.JPG'
export default function Home()
{
    return(
    <main>
        <img src={image} 
        atl="Nicaragua-Summer 2018"
        className="absolute"/>

        <section className= "relative flex justify-center main-h-screen pt-12 lg:pt-64 px-8 ml-96 ">
        <div className="static px-64 mt-32">
        <div className="w-5/12 sm:w-5/12 px-10 mr-96">
            <img src={me} alt="..." class="relative shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        </div>
        </section>
        
        <section className= "relative flex main-h-screen px-96 ml-64 mb-40">
        <div className="typewriter-text font-def text-white ml-58">
                    Hello, I am César.
        </div>
        </section>

        <section className= "relative flex main-h-screen px-80 ml-72 -mt-40">
            <div className = "fade-in-text font-def ml-38 pr-16">
            A UF <span id="goblue">Physics</span> & <span id="goorange">Computer Science</span> Student
            </div>
        </section>
28
       
    </main>
    )
}
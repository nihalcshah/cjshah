import React, { useEffect, useState, useRef } from "react";
import "animate.css/animate.min.css";
import Typing from "./Typing";
import "../magic.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');
const isSafari = window.navigator.userAgent.indexOf('Safari') != -1

const Projects = () => {
    return (
        <div className=" container w-4/5 md:my-4 box-decoration-clone mx-auto text-white overflow-hidden" id="projectspage" style={{}} >
            <div className="text-left relative md:mb-12 mb-6">
                <h1 className="font-bold text-4xl leading-normal " >projects</h1>
                <h6 className="text-lg" >c'mon cj there's no way you spent all that time to make <span className="text-cyan-300"><ReactRotatingText deletingInterval={40} typingInterval={40} items={['a playlist image generator', 'a clothing sizer', 'a international night ticket distributor']}s pause={3000}/></span></h6>
                {/* <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a> */}
                
            </div>
            <div className="flex flex-col text-white relative mb-3">
                <div className="mx-auto text-center g">
                    <div className="flex mx-auto my-3">
                        <img src="workplaces/sizemeup.png" className="h-16 w-16 md:h-10 object-contain rounded-lg mr-4 my-1" />
                        <div className="my-auto text-left">
                            <div className="text-xl font-semibold">SizeMeUp</div>
                            <div>2023</div>
                            <div className="w-full text-sm italic" >A computer vision approached to size-gauging for clothing sizes to minimize return costs for online retailers</div>
                        </div>

                    </div>
                    <div className="flex mx-auto my-3">
                        <img src="workplaces/soundtrackify.png" className="h-16 w-16 md:h-10 object-contain rounded-lg mr-4 my-1" />
                        <div className="my-auto text-left">
                            <div className="text-xl font-semibold">Soundtrackify</div>
                            <div>2023</div>
                            <div className="w-full text-sm italic" >A heuristics-based constraint set problem to generate collages from Spotify playlists using the Spotify API</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex">
                <a href="/projects" className="p-1 bg-gradient-to-br to-indigo-400 from-cyan-400 rounded-xl mx-auto">
                    <div className="h-full w-full bg-gradient-to-br to-slate-800 from-slate-900 text-white px-3 py-2 rounded-lg font-bold hover:to-indigo-400 hover:from-cyan-400">Check Out More</div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
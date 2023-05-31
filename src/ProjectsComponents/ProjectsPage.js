import React from "react";
import '../index.css';
import Nav from '../Nav';
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');



const ProjectsPage = ({ }) => {
    return (
        <div className="instrument" id="Projects">
            <div className="fixed h-screen w-screen bg-gradient-to-br from-emerald-950 via-green-950 via-80% to-emerald-950 bg-fixed overflow-hidden">
                <svg className="opacity-25" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}></stop>
                            <stop offset="50%" style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}></stop>
                            <stop offset="100%" style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity=".3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="10s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use opacty=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>
            </div>
            <div className="relative w-4/6 pt-10 mx-auto">
                <div className="text-white ">
                    <h1 style={{}} className="text-6xl font-bold mb-5"> projects </h1>
                    <h5 className="text-md  pb-3 border-b ">Over the years, I've spent a large amount of time developing projects for personal and public purposes. Some of these were meant for skill/product development, others were just 'cause I wanted to have a little fun. Scroll through the list of projects and see what I've been doing!</h5>
                </div>
                <br />
                <div className=" mx-auto text-emerald-50" id="" >
                    <div className="rounded-2xl bg-teal-950 bg-blend-overlay projectCard my-6">
                        <div className="rounded-2xl flex bg-emerald-900 bg-blend-overlay p-3 shadow-xl">
                            <img src="workplaces/sizemeup.png" className="h-16 w-16 md:h-10 object-contain rounded-lg mr-4 my-1" />
                            <div className="my-auto text-left">
                                <div className="text-xl font-semibold">SizeMeUp</div>
                                <div>2023</div>
                                <div className="w-full text-sm italic" >A computer vision approached to size-gauging for clothing sizes to minimize return costs for online retailers</div>
                            </div>
                        </div>
                        <div className=" mx-auto p-4 projectdesc">
                             <div>
                                <h1　className="text-sm tracking-widest font-semibold text-center uppercase">Computer Vision ・ Django ・ Instance Segmentation </h1>
                                <p className="p-2">
                                    As part of my senior research lab for my Computer Systems Lab at Thomas Jefferson High School for Science and Technology, My Senior Research project focused on 
                                </p>
                             </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-teal-950 bg-blend-overlay projectCard my-6">
                        <div className="rounded-2xl flex bg-emerald-900 bg-blend-overlay p-3 shadow-xl">
                            <img src="workplaces/soundtrackify.png" className="h-16 w-16 md:h-10 object-contain rounded-lg mr-4 my-1" />
                            <div className="my-auto text-left">
                                <div className="text-xl font-semibold">Soundtrackify</div>
                                <div>2023</div>
                                <div className="w-full text-sm italic" >A heuristics-based constraint set problem to generate collages from Spotify playlists using the Spotify API</div>
                            </div>
                        </div>
                        <div className=" mx-auto p-4 projectdesc">
                             <div>
                                <h1　className="text-sm tracking-widest font-semibold text-center uppercase">Computer Vision ・ Django ・ Instance Segmentation </h1>
                                <p className="p-2">
                                    As part of my senior research lab for my Computer Systems Lab at Thomas Jefferson High School for Science and Technology, My Senior Research project focused on 
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsPage;
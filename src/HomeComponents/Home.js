import React from "react";
import { useRef } from 'react';
import { Flipping } from "./Typing";


function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomBinary() {
    if (Math.random() > 0.5) {
        return 1;
    }
    return 0;
}


const Home = ({ }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        <div className="grid place-items-center w-full h-screen" id="Home">
            <div className="fixed h-screen w-screen bg-gradient-to-br from-slate-950 via-slate-700 via-80% to-slate-800 bg-fixed">
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
            {/* <div className="absolute "> </div> */}
            <div className="px-3 text-center text-white" style={{}} id="middleblock">
                <div style={{}} className="p-2 text-5xl ">
                    <div style={{ animationDelay: "0.7s", fontFamily: 'Instrument Sans, sans-serif' }} className=" text-pop pb-2 filltext  ">
                        <h2 className="px-1 text-7xl md:text-8xl instrument">cj shah.</h2>
                        <h2 className="px-1 text-7xl md:text-8xl instrument">cj shah.</h2>
                    </div>
                    <div className="text-pop text-lg pb-1 font-bold"><Flipping classes="waviy" flippingtext="hello・お胚葉・salvē・नमस्ते・jambo" /></div>
                </div>

                <hr className="h-px bg-white text-white border-none text-center drop-shadow text-white" />
            </div>
        </div>
    );
};

export default Home;
import React from "react";
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import { Card, Tooltip } from 'flowbite-react';



function Error() {

    function toggleTheme() {
        var rElem = document.getElementById("root");

        const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`

        const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
        console.log(rElem)
        if (rElem.classList.contains("dark")) {
            document.getElementById("switch-toggle").innerHTML = lightIcon
            document.getElementById("switch-toggle").classList.add('bg-indigo-500', '-translate-x-2')
            document.getElementById("switch-toggle").classList.remove('bg-gray-700', 'translate-x-full')
            rElem.classList.remove("dark")
        } else {
            document.getElementById("switch-toggle").innerHTML = darkIcon
            document.getElementById("switch-toggle").classList.remove('bg-indigo-500', '-translate-x-2')
            document.getElementById("switch-toggle").classList.add('bg-gray-700', 'translate-x-full')
            rElem.classList.add("dark")
        }
    }

    return (
        <div className="flex w-full h-[calc(100dvh)] relative dark:bg-indigo-950 bg-white flex" >
            <button className="fixed right-10 md:right-20 bottom-10 z-50 w-10 h-5 rounded-full bg-indigo-200/70 flex items-center transition duration-300  focus:outline-none shadow" onClick={toggleTheme} >
                <div className="w-6 h-6 relative rounded-full transition duration-500 transform bg-gray-700 translate-x-full p-1 text-white" id="switch-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                </div>
            </button>
            {/* Wave Animation */}
            <div className="absolute w-screen h-full bottom-0">
                <svg className="opacity-[70%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg1">
                            <stop offset="0%" stopColor="currentColor" className="text-blue-400 dark:text-blue-800"></stop>
                            <stop offset="50%" stopColor="currentColor" className="text-indigo-500 dark:text-indigo-800" ></stop>
                            <stop offset="100%" stopColor="currentColor" className="text-violet-500 dark:text-violet-950"></stop>
                        </linearGradient>
                        <path id="wave1" fill="url(#bg1)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref="#wave1" opacity=".3">
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
                        <use xlinkHref="#wave1" opacity=".6">
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
                        <use opacity=".9">
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

            {/* Information */}
            <div className="w-full h-full m-auto flex bg-[url('../public/img/contd.svg')] dark:bg-[url('../public/img/whitecontd.svg')]" style={{ backgroundRepeat: "round space" }}>
                <div className="m-auto w-3/4 z-30 h-fit flex rounded-xl bg-white shadow-xl dark:text-black p-10">
                    <div className="m-auto">
                        <div className="font-bold text-3xl md:text-6xl pb-3">Error 404: Page Not Found.</div>
                        <div className="font-semibold text-xl md:text-3xl">It is likely that the page is still under construction. Please come back at a later time to check if the page is working.</div>
                        <div className="text-right w-full mt-4 font-bold text-2xl">- Nihal CJ Shah</div>
                        <div className="mt-8 w-full flex">
                            <a href="/" className="px-3 py-1.5 pt-1 text-white font-bold rounded-lg bg-indigo-400 m-auto hover:bg-indigo-950">Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;


